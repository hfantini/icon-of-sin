// == IMPORTS
// ==================================================================================================

import { Enemy } from './Enemy';
import { SpriteSequence, SpriteImage, SpriteSequenceStrategy, AudioPlayer, AudioContent, AudioController } from 'dographics-library';

// == CLASS
// ==================================================================================================

/**
 * 
 *  Define the Mancubus sprite class.
 * 
 *  @author Henrique Fantini
 * 
 */
export class Mancubus extends Enemy
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

        // == AUDIO: Sight
        var sndSight = new AudioContent("sight", "/assets/enemies/mancubus/sight.wav");
        audioController.addChild(sndSight);

        // == AUDIO: Attack
        var sndAttack = new AudioContent("attack", "/assets/enemies/mancubus/attack.wav");
        audioController.addChild(sndAttack);

        // == AUDIO: Death
        var sndDeath = new AudioContent("death", "/assets/enemies/mancubus/death.wav");
        audioController.addChild(sndDeath);
        
        this.addChild(audioController);

        // == SOUNDS ===============

        var sequenceController = this.getChildByName("sequenceController");

        // == SPRITES: Walking

        var spriteSequenceWalk = new SpriteSequence("walk");
        spriteSequenceWalk.addChild( new SpriteImage("walk_01", "/assets/enemies/mancubus/walk_01.png") );
        spriteSequenceWalk.addChild( new SpriteImage("walk_02", "/assets/enemies/mancubus/walk_02.png") );
        spriteSequenceWalk.addChild( new SpriteImage("walk_03", "/assets/enemies/mancubus/walk_03.png") );
        spriteSequenceWalk.addChild( new SpriteImage("walk_04", "/assets/enemies/mancubus/walk_04.png") );
        spriteSequenceWalk.addChild( new SpriteImage("walk_05", "/assets/enemies/mancubus/walk_05.png") );
        spriteSequenceWalk.addChild( new SpriteImage("walk_06", "/assets/enemies/mancubus/walk_06.png") );
        spriteSequenceWalk.imageUpdateRate = 30;
        spriteSequenceWalk.strategy = SpriteSequenceStrategy.CONTINOUS;

        sequenceController.addChild(spriteSequenceWalk);

        // == SPRITES: Attack 1

        var spriteSequenceAttack = new SpriteSequence("attack_1");
        spriteSequenceAttack.addChild( new SpriteImage("attack_01", "/assets/enemies/mancubus/attack_01.png") );
        spriteSequenceAttack.addChild( new SpriteImage("attack_02", "/assets/enemies/mancubus/attack_02.png") );
        spriteSequenceAttack.addChild( new SpriteImage("attack_03", "/assets/enemies/mancubus/attack_03.png") );
        spriteSequenceAttack.imageUpdateRate = 30;
        spriteSequenceAttack.strategy = SpriteSequenceStrategy.CONTINOUS;

        sequenceController.addChild(spriteSequenceAttack);

        // == SPRITES: Death

        var spriteSequenceDeath = new SpriteSequence("death");
        spriteSequenceDeath.addChild( new SpriteImage("death_01", "/assets/enemies/mancubus/death_01.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_02", "/assets/enemies/mancubus/death_02.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_03", "/assets/enemies/mancubus/death_03.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_04", "/assets/enemies/mancubus/death_04.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_05", "/assets/enemies/mancubus/death_05.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_06", "/assets/enemies/mancubus/death_06.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_07", "/assets/enemies/mancubus/death_07.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_08", "/assets/enemies/mancubus/death_08.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_09", "/assets/enemies/mancubus/death_09.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_10", "/assets/enemies/mancubus/death_10.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_11", "/assets/enemies/mancubus/death_11.png") );
        spriteSequenceDeath.imageUpdateRate = 40;
        spriteSequenceDeath.strategy = SpriteSequenceStrategy.CONTINOUS;
        spriteSequenceDeath.loop = false

        sequenceController.addChild(spriteSequenceDeath);   
    }

	// == EVENTS(S)
    // ==============================================================================================	
    
    // OVERRIDED
    protected onLoadContent(self:Enemy)
    {
        super.onLoadContent(self);

        this.MAX_ATTACK_LOOP = 3;
    }

	// == GETTER(S) & SETTER(S)
    // ==============================================================================================		
}