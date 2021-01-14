// == IMPORTS
// ==================================================================================================

import { Enemy } from './Enemy';
import { SpriteSequence, SpriteImage, SpriteSequenceStrategy, AudioPlayer, AudioContent, AudioController } from 'dographics-library';

// == CLASS
// ==================================================================================================

/**
 * 
 *  Define the Revenant sprite class.
 * 
 *  @author Henrique Fantini
 * 
 */
export class Revenant extends Enemy
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
        var sndSight = new AudioContent("sight", "/assets/enemies/revenant/sight.wav");
        audioController.addChild(sndSight);

        // == AUDIO: Attack 1
        var sndAttack = new AudioContent("attack", "/assets/enemies/revenant/attack.wav");
        audioController.addChild(sndAttack);

        // == AUDIO: Attack 2
        var sndAttack = new AudioContent("attack2", "/assets/enemies/revenant/attack2.mp3");
        audioController.addChild(sndAttack);

        // == AUDIO: Death
        var sndDeath = new AudioContent("death", "/assets/enemies/revenant/death.wav");
        audioController.addChild(sndDeath);
        
        this.addChild(audioController);

        // == SOUNDS ===============

        var sequenceController = this.getChildByName("sequenceController");

        // == SPRITES: Walking

        var spriteSequenceWalk = new SpriteSequence("walk");
        spriteSequenceWalk.addChild( new SpriteImage("walk_01", "/assets/enemies/revenant/walk_01.png") );
        spriteSequenceWalk.addChild( new SpriteImage("walk_02", "/assets/enemies/revenant/walk_02.png") );
        spriteSequenceWalk.addChild( new SpriteImage("walk_03", "/assets/enemies/revenant/walk_03.png") );
        spriteSequenceWalk.addChild( new SpriteImage("walk_04", "/assets/enemies/revenant/walk_04.png") );
        spriteSequenceWalk.addChild( new SpriteImage("walk_05", "/assets/enemies/revenant/walk_05.png") );
        spriteSequenceWalk.imageUpdateRate = 40;
        spriteSequenceWalk.strategy = SpriteSequenceStrategy.CONTINOUS;

        sequenceController.addChild(spriteSequenceWalk);

        // == SPRITES: Attack 1

        var spriteSequenceAttack1 = new SpriteSequence("attack_1");
        spriteSequenceAttack1.addChild( new SpriteImage("attack_01", "/assets/enemies/revenant/attack_01_01.png") );
        spriteSequenceAttack1.addChild( new SpriteImage("attack_02", "/assets/enemies/revenant/attack_01_02.png") );
        spriteSequenceAttack1.imageUpdateRate = 20;
        spriteSequenceAttack1.strategy = SpriteSequenceStrategy.CONTINOUS;

        sequenceController.addChild(spriteSequenceAttack1);

        // == SPRITES: Attack 2

        var spriteSequenceAttack2 = new SpriteSequence("attack_2");
        spriteSequenceAttack2.addChild( new SpriteImage("attack_02_01", "/assets/enemies/revenant/attack_02_01.png") );
        spriteSequenceAttack2.addChild( new SpriteImage("attack_02_02", "/assets/enemies/revenant/attack_02_02.png") );
        spriteSequenceAttack2.addChild( new SpriteImage("attack_02_03", "/assets/enemies/revenant/attack_02_03.png") );
        spriteSequenceAttack2.imageUpdateRate = 30;
        spriteSequenceAttack2.strategy = SpriteSequenceStrategy.CONTINOUS;        

        sequenceController.addChild(spriteSequenceAttack2);

        // == SPRITES: Death

        var spriteSequenceDeath = new SpriteSequence("death");
        spriteSequenceDeath.addChild( new SpriteImage("death_01", "/assets/enemies/revenant/death_01.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_02", "/assets/enemies/revenant/death_02.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_03", "/assets/enemies/revenant/death_03.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_04", "/assets/enemies/revenant/death_04.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_05", "/assets/enemies/revenant/death_05.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_06", "/assets/enemies/revenant/death_06.png") );
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