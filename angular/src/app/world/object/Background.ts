// == IMPORTS
// ==================================================================================================

import { Sprite, SpriteImage, GeometricalTransform, DoGraphicsEngine } from 'dographics-library';

// == CLASS
// ==================================================================================================

export class Background extends Sprite
{
    // == DECLARATIONS
	// ==============================================================================================
	
	// -- CONST -------------------------------------------------------------------------------------
	
	// -- VAR ---------------------------------------------------------------------------------------

    // == CONSTRUCTOR
    // ==============================================================================================
	
	// == METHOD(S)
    // ==============================================================================================
    
	// == EVENTS(S)
    // ==============================================================================================	
    
    // OVERRIDED
    public onInit()
    {
        super.onInit();

        var spriteImage:SpriteImage = new SpriteImage("si_background", "/assets/iconofsin.jpg");
        this.addChild(spriteImage);
    }

    // OVERRIDED
    protected onLoadContent(self:Sprite)
    {
        super.onLoadContent(self);

        // == OPTIONS
        this._dynamicSpriteSize = false;

        var engine = this.getParentRecursively(DoGraphicsEngine);
        var transform = this.getChildByType(GeometricalTransform) as GeometricalTransform;

        if(transform != null)
        {
            transform.origin.X = 0;
            transform.origin.Y = 0;
            transform.size.X = engine.size.X;
            transform.size.Y = engine.size.Y;
        }
    }

	// == GETTER(S) & SETTER(S)
    // ==============================================================================================	
}