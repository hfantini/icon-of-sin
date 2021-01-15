// == IMPORTS
// ==================================================================================================

import { Enemy } from './Enemy';
import { SpriteSequence, SpriteImage, SpriteSequenceStrategy, AudioPlayer, AudioContent, AudioController } from 'dographics-library';

// == CLASS
// ==================================================================================================

/**
 * 
 *  Define the Forman Sergeant sprite class.
 * 
 *  @author Henrique Fantini
 * 
 */
export class FormerSergeant extends Enemy
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
        var sndAttack = new AudioContent("attack", "/assets/enemies/formersergeant/attack.wav");
        audioController.addChild(sndAttack);

        // == AUDIO: Death
        var sndDeath = new AudioContent("death", "/assets/enemies/formersergeant/death.wav");
        audioController.addChild(sndDeath);
        
        this.addChild(audioController);

        // == SOUNDS ===============

        var sequenceController = this.getChildByName("sequenceController");

        // == SPRITES: Walking

        var spriteSequenceWalk = new SpriteSequence("walk");
        spriteSequenceWalk.addChild( new SpriteImage("walk_01", "/assets/enemies/formersergeant/walk_01.png") );
        spriteSequenceWalk.addChild( new SpriteImage("walk_02", "/assets/enemies/formersergeant/walk_02.png") );
        spriteSequenceWalk.addChild( new SpriteImage("walk_03", "/assets/enemies/formersergeant/walk_03.png") );
        spriteSequenceWalk.addChild( new SpriteImage("walk_04", "/assets/enemies/formersergeant/walk_04.png") );
        spriteSequenceWalk.imageUpdateRate = 60;
        spriteSequenceWalk.strategy = SpriteSequenceStrategy.CONTINOUS;

        sequenceController.addChild(spriteSequenceWalk);

        // == SPRITES: Attack 1

        var spriteSequenceAttack = new SpriteSequence("attack_1");
        spriteSequenceAttack.addChild( new SpriteImage("attack_01", "/assets/enemies/formersergeant/attack_01.png") );
        spriteSequenceAttack.addChild( new SpriteImage("attack_02", "/assets/enemies/formersergeant/attack_02.png") );
        spriteSequenceAttack.imageUpdateRate = 60;
        spriteSequenceAttack.strategy = SpriteSequenceStrategy.BOOMERANG;

        sequenceController.addChild(spriteSequenceAttack);

        // == SPRITES: Death

        var spriteSequenceDeath = new SpriteSequence("death");
        spriteSequenceDeath.addChild( new SpriteImage("death_01", "/assets/enemies/formersergeant/death_01.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_02", "/assets/enemies/formersergeant/death_02.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_03", "/assets/enemies/formersergeant/death_03.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_04", "/assets/enemies/formersergeant/death_04.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_05", "/assets/enemies/formersergeant/death_05.png") );
        spriteSequenceDeath.addChild( new SpriteImage("death_06", "/assets/enemies/formersergeant/death_06.png") );
        spriteSequenceDeath.imageUpdateRate = 60;
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

        this.MAX_WALKING_LOOP = 5;
    }

	// == GETTER(S) & SETTER(S)
    // ==============================================================================================		
}