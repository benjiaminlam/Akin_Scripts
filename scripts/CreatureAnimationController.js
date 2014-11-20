#pragma strict
var isback:int;
var isRight:int;
var isLeft:int;
static var keepIdle:boolean;
static var onSide:int=0;
static var onShoot:int;
static var isDeath:int=0;
function Update () {
	if(keepIdle == false)
	{
		if(isDeath==0){
			//Death
			gameObject.Find("creatureDeath").GetComponent(Animator).enabled = false;
			gameObject.Find("creatureDeath").GetComponent(SpriteRenderer).enabled = false;
			if (Input.GetKey ("w")){
			isback=1;
			isRight=0;
			isLeft=0;
				gameObject.Find("front2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("right2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("left2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("Idle2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("back2").GetComponent(SpriteRenderer).enabled = true;
				gameObject.Find("IdleBack2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("front2").GetComponent(Animator).enabled = false;
				gameObject.Find("right2").GetComponent(Animator).enabled = false;
				gameObject.Find("left2").GetComponent(Animator).enabled = false;
				gameObject.Find("Idle2").GetComponent(Animator).enabled = false;
				gameObject.Find("back2").GetComponent(Animator).enabled = true;
				gameObject.Find("IdleBack2").GetComponent(Animator).enabled = false;
				//left
				gameObject.Find("IdleLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleLeft2").GetComponent(SpriteRenderer).enabled = false;
				//right
				gameObject.Find("IdleRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwLeft2").GetComponent(SpriteRenderer).enabled = false;
				}
			else if (Input.GetKey ("a")){
				isRight=1;
				isLeft=0;
				isback=0;
				gameObject.Find("front2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("right2").GetComponent(SpriteRenderer).enabled = true;
				gameObject.Find("left2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("Idle2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("back2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("front2").GetComponent(Animator).enabled = false;
				gameObject.Find("right2").GetComponent(Animator).enabled = true;
				gameObject.Find("left2").GetComponent(Animator).enabled = false;
				gameObject.Find("Idle2").GetComponent(Animator).enabled = false;
				gameObject.Find("back2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(Animator).enabled = false;
				//left
				gameObject.Find("IdleLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleLeft2").GetComponent(SpriteRenderer).enabled = false;
				//right
				gameObject.Find("IdleRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwLeft2").GetComponent(SpriteRenderer).enabled = false;}
			else if (Input.GetKey ("s")){
			isback=0;
			isRight=0;
			isLeft=0;
				gameObject.Find("front2").GetComponent(SpriteRenderer).enabled = true;
				gameObject.Find("right2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("left2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("Idle2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("back2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("front2").GetComponent(Animator).enabled = true;
				gameObject.Find("right2").GetComponent(Animator).enabled = false;
				gameObject.Find("left2").GetComponent(Animator).enabled = false;
				gameObject.Find("Idle2").GetComponent(Animator).enabled = false;
				gameObject.Find("back2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(Animator).enabled = false;
				//left
				gameObject.Find("IdleLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleLeft2").GetComponent(SpriteRenderer).enabled = false;
				//right
				gameObject.Find("IdleRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwLeft2").GetComponent(SpriteRenderer).enabled = false;}
			else if (Input.GetKey ("d")){
			isRight=0;
			isLeft=1;
			isback=0;
				gameObject.Find("front2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("right2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("left2").GetComponent(SpriteRenderer).enabled = true;
				gameObject.Find("Idle2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("back2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("front2").GetComponent(Animator).enabled = false;
				gameObject.Find("right2").GetComponent(Animator).enabled = false;
				gameObject.Find("left2").GetComponent(Animator).enabled = true;
				gameObject.Find("Idle2").GetComponent(Animator).enabled = false;
				gameObject.Find("back2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(Animator).enabled = false;
				//left
				gameObject.Find("IdleLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleLeft2").GetComponent(SpriteRenderer).enabled = false;
				//right
				gameObject.Find("IdleRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwLeft2").GetComponent(SpriteRenderer).enabled = false;}
			else if(onSide==1&&onShoot==1){
				gameObject.Find("front2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("right2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("left2").GetComponent(SpriteRenderer).enabled = false;
				//gameObject.Find("Idle2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("back2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("front2").GetComponent(Animator).enabled = false;
				gameObject.Find("right2").GetComponent(Animator).enabled = false;
				gameObject.Find("left2").GetComponent(Animator).enabled = false;
				//gameObject.Find("Idle2").GetComponent(Animator).enabled = false;
				gameObject.Find("back2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(Animator).enabled = false;
				//left
				gameObject.Find("IdleLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleLeft2").GetComponent(SpriteRenderer).enabled = false;
				//right
				gameObject.Find("IdleRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwRight2").GetComponent(Animator).enabled = true;
				gameObject.Find("throwRight2").GetComponent(SpriteRenderer).enabled = true;
				//rightShoot
				gameObject.Find("throwLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwLeft2").GetComponent(SpriteRenderer).enabled = false;
			}
			else if(onSide==0&&onShoot==1){
				gameObject.Find("front2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("right2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("left2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("Idle2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("back2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("front2").GetComponent(Animator).enabled = false;
				gameObject.Find("right2").GetComponent(Animator).enabled = false;
				gameObject.Find("left2").GetComponent(Animator).enabled = false;
				gameObject.Find("Idle2").GetComponent(Animator).enabled = false;
				gameObject.Find("back2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(Animator).enabled = false;
				//left
				gameObject.Find("IdleLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleLeft2").GetComponent(SpriteRenderer).enabled = false;
				//right
				gameObject.Find("IdleRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwLeft2").GetComponent(Animator).enabled = true;
				gameObject.Find("throwLeft2").GetComponent(SpriteRenderer).enabled = true;
			}
			else if(isback==0&&isLeft==0&&isRight==0&&onShoot==0){
				gameObject.Find("front2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("right2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("left2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("Idle2").GetComponent(SpriteRenderer).enabled = true;
				gameObject.Find("back2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("front2").GetComponent(Animator).enabled = false;
				gameObject.Find("right2").GetComponent(Animator).enabled = false;
				gameObject.Find("left2").GetComponent(Animator).enabled = false;
				gameObject.Find("Idle2").GetComponent(Animator).enabled = true;
				gameObject.Find("back2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(Animator).enabled = false;
				//left
				gameObject.Find("IdleLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleLeft2").GetComponent(SpriteRenderer).enabled = false;
				//right
				gameObject.Find("IdleRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwLeft2").GetComponent(SpriteRenderer).enabled = false;
			}
			else if(isback==1&&isLeft==0&&isRight==0&&onShoot==0){
				gameObject.Find("front2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("right2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("left2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("Idle2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("back2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(SpriteRenderer).enabled = true;
				gameObject.Find("front2").GetComponent(Animator).enabled = false;
				gameObject.Find("right2").GetComponent(Animator).enabled = false;
				gameObject.Find("left2").GetComponent(Animator).enabled = false;
				gameObject.Find("Idle2").GetComponent(Animator).enabled = false;
				gameObject.Find("back2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(Animator).enabled = true;
				//left
				gameObject.Find("IdleLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleLeft2").GetComponent(SpriteRenderer).enabled = false;
				//right
				gameObject.Find("IdleRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwLeft2").GetComponent(SpriteRenderer).enabled = false;
			}
			else if(isRight==1&&isback==0&&isLeft==0&&onShoot==0){
				gameObject.Find("front2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("right2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("left2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("Idle2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("back2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("front2").GetComponent(Animator).enabled = false;
				gameObject.Find("right2").GetComponent(Animator).enabled = false;
				gameObject.Find("left2").GetComponent(Animator).enabled = false;
				gameObject.Find("Idle2").GetComponent(Animator).enabled = false;
				gameObject.Find("back2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(Animator).enabled = false;
				//left
				gameObject.Find("IdleLeft2").GetComponent(Animator).enabled = true;
				gameObject.Find("IdleLeft2").GetComponent(SpriteRenderer).enabled = true;
				//right
				gameObject.Find("IdleRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwLeft2").GetComponent(SpriteRenderer).enabled = false;
			}
			else if(isLeft==1&&isRight==0&&isback==0&&onShoot==0){
				gameObject.Find("front2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("right2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("left2").GetComponent(SpriteRenderer).enabled = false;
				//gameObject.Find("Idle2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("back2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("front2").GetComponent(Animator).enabled = false;
				gameObject.Find("right2").GetComponent(Animator).enabled = false;
				gameObject.Find("left2").GetComponent(Animator).enabled = false;
				//gameObject.Find("Idle2").GetComponent(Animator).enabled = false;
				gameObject.Find("back2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(Animator).enabled = false;
				//left
				gameObject.Find("IdleLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleLeft2").GetComponent(SpriteRenderer).enabled = false;
				//right
				gameObject.Find("IdleRight2").GetComponent(Animator).enabled = true;
				gameObject.Find("IdleRight2").GetComponent(SpriteRenderer).enabled = true;
				//rightShoot
				gameObject.Find("throwRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwLeft2").GetComponent(SpriteRenderer).enabled = false;
			}
		}
		else if(isDeath==1){
				gameObject.Find("front2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("right2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("left2").GetComponent(SpriteRenderer).enabled = false;
				//gameObject.Find("Idle2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("back2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("front2").GetComponent(Animator).enabled = false;
				gameObject.Find("right2").GetComponent(Animator).enabled = false;
				gameObject.Find("left2").GetComponent(Animator).enabled = false;
				gameObject.Find("Idle2").GetComponent(Animator).enabled = false;
				gameObject.Find("back2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(Animator).enabled = false;
				//left
				gameObject.Find("IdleLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleLeft2").GetComponent(SpriteRenderer).enabled = false;
				//right
				gameObject.Find("IdleRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwLeft2").GetComponent(SpriteRenderer).enabled = false;
				//Death
				gameObject.Find("creatureDeath").GetComponent(Animator).enabled = true;
				gameObject.Find("creatureDeath").GetComponent(SpriteRenderer).enabled = true;
		}
	}
	
	else if(keepIdle==true){
		gameObject.Find("front2").GetComponent(SpriteRenderer).enabled = false;
		gameObject.Find("front2").GetComponent(Animator).enabled = false;
		gameObject.Find("Idle2").GetComponent(SpriteRenderer).enabled = true;
		gameObject.Find("Idle2").GetComponent(Animator).enabled = true;
		gameObject.Find("right2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("left2").GetComponent(SpriteRenderer).enabled = false;
				
				gameObject.Find("back2").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(SpriteRenderer).enabled = false;
				//gameObject.Find("front2").GetComponent(Animator).enabled = false;
				gameObject.Find("right2").GetComponent(Animator).enabled = false;
				gameObject.Find("left2").GetComponent(Animator).enabled = false;
				
				gameObject.Find("back2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleBack2").GetComponent(Animator).enabled = false;
				//left
				gameObject.Find("IdleLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleLeft2").GetComponent(SpriteRenderer).enabled = false;
				//right
				gameObject.Find("IdleRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwRight2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwRight2").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwLeft2").GetComponent(Animator).enabled = false;
				gameObject.Find("throwLeft2").GetComponent(SpriteRenderer).enabled = false;
				//Death
				gameObject.Find("creatureDeath").GetComponent(Animator).enabled = false;
				gameObject.Find("creatureDeath").GetComponent(SpriteRenderer).enabled = false;
	}
}