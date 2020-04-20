// == IMPORTS
// ==================================================================================================

import { Sprite, SpriteSequenceController, InputMouse, DoGraphicsEngine, GeometricalTransform, MouseButton, AudioController, AudioPlayerState } from 'dographics-library';
import { Timing } from 'dographics-library/lib/dglib/engine/structures/Timing';
import { EnemyState } from '../../strucutures/EnemyState';
import { Self } from '@angular/core';

// == CLASS
// ==================================================================================================

/**
 * 
 *  Generic enemy class.
 * 
 *  @author Henrique Fantini
 * 
 */
export abstract class Enemy extends Sprite
{
	// == DECLARATIONS
	// ==============================================================================================
	
	// -- CONST -------------------------------------------------------------------------------------
    
    protected MAX_WALKING_LOOP = 1;
    protected MAX_ATTACK_LOOP = 1;
    protected DELAY_NEXT_ENEMY = 1000;

	// -- VAR ---------------------------------------------------------------------------------------

    protected _enemyState:EnemyState = EnemyState.STATE_WALKING; 
    protected _loopCount = 0;
    protected _currentAttack = 1;
    protected _transform:GeometricalTransform;
    protected _inputMouse:InputMouse;
    protected _timeOfDeath:number = null;

    // == CONSTRUCTOR
    // ==============================================================================================
	
	// == METHOD(S)
    // ==============================================================================================
    
    public reset()
    {
        this._enemyState = EnemyState.STATE_WALKING;
    }

	// == EVENTS(S)
    // ==============================================================================================	
    
    // OVERRIDED
    public onInit()
    {
        super.onInit();

        this.drawable = false;

        // AUDIO CONTROLLER
        var audioController = new AudioController("audioController");
        this.addChild(audioController);

        // SEQUENCE CONTROLLER

        var sequenceController = new SpriteSequenceController("sequenceController");
        this.addChild(sequenceController);
    }

    // OVERRIDED
    protected onLoadContent(self:Enemy)
    {
        super.onLoadContent(self);

        this._dynamicSpriteSize = true;
        
        var engine = self.getParentRecursively(DoGraphicsEngine) as DoGraphicsEngine;
        self._inputMouse = engine.inputMouse;

        self._transform = self.getChildByType(GeometricalTransform) as GeometricalTransform;
        
        self._transform.origin.X = 0.5;
        self._transform.origin.Y = 1;
        self._transform.position.X = (engine.size.X / 2);
        self._transform.position.Y = (engine.size.Y / 2) + 300;
        self._transform.scale.X = 4;
        self._transform.scale.Y = 4;
    }

    // OVERRIDED
    protected onUpdate(self:Enemy, timing:Timing):void
    {
        super.onUpdate(self, timing);

        var audioController = self.getChildByType(AudioController) as AudioController;
        var seqController = self.getChildByType(SpriteSequenceController) as SpriteSequenceController;

        if( this._inputMouse.isButtonPressed(MouseButton.LEFT) )
        {
            if(self.enemyState == EnemyState.STATE_WALKING || self.enemyState == EnemyState.STATE_ATTACKING)
            {
                self._enemyState = EnemyState.STATE_DYING;
            }
        }

        if(self._enemyState == EnemyState.STATE_WALKING)
        {
            if(seqController.currentActiveSequence.id != "walk")
            {
                seqController.changeCurrentSequence("walk");
            }

            if(this._loopCount < self.MAX_WALKING_LOOP )
            {
                if(seqController.currentActiveSequence.sequenceFinished)
                {
                    self._loopCount++;
                }
            }
            else
            {
                if( seqController.hasSequence( "attack_" + (this._currentAttack + 1) ) )
                {
                    this._currentAttack++;
                    seqController.changeCurrentSequence( "attack_" + this._currentAttack )
                }
                else
                {
                    this._currentAttack = 1;
                }

                self._loopCount = 0;
                self._enemyState = EnemyState.STATE_ATTACKING;
            }
        }
        else if(self._enemyState == EnemyState.STATE_ATTACKING)
        {
            if(seqController.currentActiveSequence.id != "attack_" + this._currentAttack)
            {
                seqController.changeCurrentSequence("attack_" + this._currentAttack);

                if (audioController.getState("attack") != AudioPlayerState.PLAYING)
                {
                    audioController.play("attack");
                }
            }

            if(seqController.currentActiveSequence.loopCounter > 0)
            {
                if(seqController.currentActiveSequence.loopCounter >= this.MAX_ATTACK_LOOP)
                {
                    self._enemyState = EnemyState.STATE_WALKING;
                }
            }
        }
        else if(self._enemyState == EnemyState.STATE_DYING)
        {
            if(seqController.currentActiveSequence.id != "death")
            {
                seqController.changeCurrentSequence("death");

                if (audioController.getState("death") != AudioPlayerState.PLAYING)
                {
                    audioController.play("death");
                }
            }

            if(seqController.currentActiveSequence.sequenceFinished)
            {
                if(this._timeOfDeath == null)
                {
                    this._timeOfDeath = timing.elapsedTime;
                }

                if(timing.elapsedTime - this._timeOfDeath > this.DELAY_NEXT_ENEMY)
                {
                    this._timeOfDeath = null;
                    self._enemyState = EnemyState.STATE_NEXT;
                }
            }
        }
    }

	// == GETTER(S) & SETTER(S)
    // ==============================================================================================

    public get enemyState()
    {
        return this._enemyState;
    }
}