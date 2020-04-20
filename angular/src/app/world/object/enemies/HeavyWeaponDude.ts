// == IMPORTS
// ==================================================================================================

import { Enemy } from './Enemy';
import { SpriteSequence, SpriteImage, SpriteSequenceStrategy, AudioPlayer, AudioContent, AudioController } from 'dographics-library';

// == CLASS
// ==================================================================================================

/**
 * 
 *  Define the Heavy Weapons Dude sprite class.
 * 
 *  @author Henrique Fantini
 * 
 */
export class HeavyWeaponDude extends Enemy
{
    // == DECLARATIONS
	// ==============================================================================================
	
	// -- CONST -------------------------------------------------------------------------------------
	
	// -- VAR ---------------------------------------------------------------------------------------

    // == CONSTRUCTOR
    // ==============================================================================================
	
	// == METHOD(S)
    // ==============================================================================================
    
    //OVERRIDED
    public onInit()
    {
        super.onInit();

        // == AUDIO ================

        var audioController = this.getChildByName("audioController") as AudioController;

        // == AUDIO: Attack
        var sndAttack = new AudioContent("attack", "/assets/enemies/heavyweapondude/attack.mp3");
        audioController.addChild(sndAttack);

        // == AUDIO: Death
        var sndDeath = new AudioContent("death", "/assets/enemies/heavyweapondude/death.wav");
        audioController.addChild(sndDeath);
        
        this.addChild(audioController);

        // == SOUNDS ===============

        var sequenceController = this.getChildByName("sequenceController");

        // == SPRITES: Walking

        this.MAX_WALKING_LOOP = 4;
        var spriteSequenceWalk = new SpriteSequence("walk");
        spriteSequenceWalk.addChild( new SpriteImage("walk_01", "/assets/enemies/heavyweapondude/walk_01.png") );
        spriteSequenceWalk.addChild( new SpriteImage("walk_02", "/assets/enemies/heavyweapondude/walk_02.png") );
        spriteSequenceWalk.addChild( new SpriteImage("walk_03", "/assets/enemies/heavyweapondude/walk_03.png") );
        spriteSequenceWalk.addChild( new SpriteImage("walk_04", "/assets/enemies/heavyweapondude/walk_04.png") );
        spriteSequenceWalk.imageUpdateRate = 40;
        spriteSequenceWalk.strategy = SpriteSequenceStrategy.CONTINOUS;

        sequenceController.addChild(spriteSequenceWalk);

        // == SPRITES: Attack 1

        var spriteSequenceAttack = new SpriteSequence("attack_1");
        spriteSequenceAttack.addChild( new SpriteImage("attack_01", "/assets/enemies/heavyweapondude/attack_01.png") );
        spriteSequenceAttack.addChild( new SpriteImage("attack_02", "/assets/enemies/heavyweapondude/attack_02.png") );
        spriteSequenceAttack.imageUpdateRate = 45;
        spriteSequenceAttack.strategy = SpriteSequenceStrategy.CONTINOUS;

        sequenceController.addChild(spriteSequenceAttack);

        // == SPRITES: Death

        var spriteSequenceDeath = new SpriteSequence("death");
        spriteSequenceDeath.addChild( new SpriteImage("death_01", "/assets/enemies/heavyweapondude/death_01.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_02", "/assets/enemies/heavyweapondude/death_02.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_03", "/assets/enemies/heavyweapondude/death_03.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_04", "/assets/enemies/heavyweapondude/death_04.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_05", "/assets/enemies/heavyweapondude/death_05.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_06", "/assets/enemies/heavyweapondude/death_06.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_07", "/assets/enemies/heavyweapondude/death_07.png") );
        spriteSequenceDeath.imageUpdateRate = 40;
        spriteSequenceDeath.strategy = SpriteSequenceStrategy.CONTINOUS;
        spriteSequenceDeath.loop = false

        sequenceController.addChild(spriteSequenceDeath);   
    }

    // OVERRIDED
    protected onLoadContent(self:Enemy)
    {
        super.onLoadContent(self);

        this.MAX_ATTACK_LOOP = 5;
    }

	// == EVENTS(S)
    // ==============================================================================================	
	
	// == GETTER(S) & SETTER(S)
    // ==============================================================================================		
}