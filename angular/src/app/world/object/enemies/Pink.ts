// == IMPORTS
// ==================================================================================================

import { Enemy } from './Enemy';
import { SpriteSequence, SpriteImage, SpriteSequenceStrategy, AudioPlayer, AudioContent, AudioController } from 'dographics-library';

// == CLASS
// ==================================================================================================

/**
 * 
 *  Define the Pink sprite class.
 * 
 *  @author Henrique Fantini
 * 
 */
export class Pink extends Enemy
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
        var sndSight = new AudioContent("sight", "/assets/enemies/pink/sight.wav");
        audioController.addChild(sndSight);

        // == AUDIO: Attack
        var sndAttack = new AudioContent("attack", "/assets/enemies/pink/attack.wav");
        audioController.addChild(sndAttack);

        // == AUDIO: Death
        var sndDeath = new AudioContent("death", "/assets/enemies/pink/death.wav");
        audioController.addChild(sndDeath);
        
        this.addChild(audioController);

        // == SOUNDS ===============

        var sequenceController = this.getChildByName("sequenceController");

        // == SPRITES: Walking

        var spriteSequenceWalk = new SpriteSequence("walk");
        spriteSequenceWalk.addChild( new SpriteImage("walk_01", "/assets/enemies/pink/walk_01.png") );
        spriteSequenceWalk.addChild( new SpriteImage("walk_02", "/assets/enemies/pink/walk_02.png") );
        spriteSequenceWalk.addChild( new SpriteImage("walk_03", "/assets/enemies/pink/walk_03.png") );
        spriteSequenceWalk.addChild( new SpriteImage("walk_04", "/assets/enemies/pink/walk_04.png") );
        spriteSequenceWalk.imageUpdateRate = 40;
        spriteSequenceWalk.strategy = SpriteSequenceStrategy.CONTINOUS;

        sequenceController.addChild(spriteSequenceWalk);

        // == SPRITES: Attack 1

        var spriteSequenceAttack = new SpriteSequence("attack_1");
        spriteSequenceAttack.addChild( new SpriteImage("attack_01", "/assets/enemies/pink/attack_01.png") );
        spriteSequenceAttack.addChild( new SpriteImage("attack_02", "/assets/enemies/pink/attack_02.png") );
        spriteSequenceAttack.addChild( new SpriteImage("attack_03", "/assets/enemies/pink/attack_03.png") );
        spriteSequenceAttack.addChild( new SpriteImage("attack_04", "/assets/enemies/pink/attack_04.png") );
        spriteSequenceAttack.imageUpdateRate = 30;
        spriteSequenceAttack.strategy = SpriteSequenceStrategy.CONTINOUS;

        sequenceController.addChild(spriteSequenceAttack);

        // == SPRITES: Death

        var spriteSequenceDeath = new SpriteSequence("death");
        spriteSequenceDeath.addChild( new SpriteImage("death_01", "/assets/enemies/pink/death_01.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_02", "/assets/enemies/pink/death_02.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_03", "/assets/enemies/pink/death_03.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_04", "/assets/enemies/pink/death_04.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_05", "/assets/enemies/pink/death_05.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_06", "/assets/enemies/pink/death_06.png") );
        spriteSequenceDeath.imageUpdateRate = 40;
        spriteSequenceDeath.strategy = SpriteSequenceStrategy.CONTINOUS;
        spriteSequenceDeath.loop = false

        sequenceController.addChild(spriteSequenceDeath);   
    }

	// == EVENTS(S)
    // ==============================================================================================	
	
	// == GETTER(S) & SETTER(S)
    // ==============================================================================================		
}