// == IMPORTS
// ==================================================================================================

import { World2D, Camera2D, RGBA32Color, AudioPlayer, AudioContent, EngineObjectState, AudioPlayerState, Sprite } from "dographics-library"
import { Background } from './object/Background';
import { Timing } from 'dographics-library/lib/dglib/engine/structures/Timing';
import { FormerHuman } from './object/enemies/FormerHuman';
import { Enemy } from './object/enemies/Enemy';
import { EnemyState } from './strucutures/EnemyState';
import { FormerSergeant } from './object/enemies/FormerSergeant';
import { HeavyWeaponDude } from './object/enemies/HeavyWeaponDude';

// == CLASS
// ==================================================================================================

export class MainWorld extends World2D
{
	// == DECLARATIONS
	// ==============================================================================================
	
	// -- CONST -------------------------------------------------------------------------------------
	
	// -- VAR ---------------------------------------------------------------------------------------

    private _music:AudioPlayer;
    private _enemyList:Array<Enemy>;
    private _currentEnemyIndex:number = 0;

    // == CONSTRUCTOR
    // ==============================================================================================
	
	// == METHOD(S)
    // ==============================================================================================
    
    public resetFrame(self:World2D, target)
    {
        super.resetFrame(self, target);
    }

	// == EVENTS(S)
    // ==============================================================================================	
    
    // OVERRIDED
    protected onInit()
    {
        super.onInit();

        this._enemyList = new Array<Enemy>();

        // CAMERA

        var camera1 = new Camera2D("camera1");
        this.addChild(camera1);

        // AUDIO

        var audioContent = new AudioContent("ac_bgmusic", "/assets/bgmusic.mp3");
        this._music = new AudioPlayer("music", audioContent);
        this.addChild(this._music);

        // SPRITES

        var background = new Background("background");
        this.addChild(background);

        // ENEMY: Forman Human
        var enemyFormerHuman = new FormerHuman("formerHuman");
        enemyFormerHuman.updatable = false;
        enemyFormerHuman.drawable = false;
        this.addChild(enemyFormerHuman);

        // ENEMY: Forman Sergeant
        var enemyFormerSergeant = new FormerSergeant("formerSergeant");
        enemyFormerSergeant.updatable = false;
        enemyFormerSergeant.drawable = false;
        this.addChild(enemyFormerSergeant);

        // ENEMY: Heavy Weapon Dude
        var enemyHeavyWeaponDude = new HeavyWeaponDude("enemyHeavyWeaponDude");
        enemyHeavyWeaponDude.updatable = false;
        enemyHeavyWeaponDude.drawable = false;
        this.addChild(enemyHeavyWeaponDude);
    }

    // OVERRIDED
    protected onLoadContent(self:MainWorld)
    {
        super.onLoadContent(self);
        
        // SPRITES
        this._enemyList = this.getChildrenByType(Enemy) as Array<Enemy>;

        // AUDIO
        this._music.volume = 40;

        self._backgroundColor = new RGBA32Color("#800e06");
    }

    // OVERRIDED
    protected onUpdate(self:MainWorld, timing:Timing):void
    {
        console.log(timing.deltaTime);
        if(this.state == EngineObjectState.RUNNING)
        {
            super.onUpdate(self, timing);

            if(this._music.playerState != AudioPlayerState.PLAYING)
            {
                this._music.play();
            }

            // ENEMIES

            if(this._currentEnemyIndex < this._enemyList.length)
            {
                var enemy = this._enemyList[this._currentEnemyIndex];

                enemy.drawable = true;
                enemy.updatable = true;

                if(enemy.enemyState == EnemyState.STATE_NEXT)
                {
                    enemy.reset();
                    enemy.updatable = false;
                    enemy.drawable = false;
                    this._currentEnemyIndex++;
                }
            }
            else
            {
                this._currentEnemyIndex = 0;
            }
        }
    }

	// == GETTER(S) & SETTER(S)
    // ==============================================================================================		
}