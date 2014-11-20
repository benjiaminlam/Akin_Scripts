#pragma strict
var isback:int;
var isRight:int;
var isLeft:int;
static var onSide:int=0;
static var keepIdle:boolean;
static var onShoot:int;
static var isDeath:int=0;
function Start(){
	
}
function Update () {
	if(keepIdle == false)
	{
		if(isDeath==0){
			//Death
			gameObject.Find("boyDeath").GetComponent(Animator).enabled = false;
			gameObject.Find("boyDeath").GetComponent(SpriteRenderer).enabled = false;
			if (Input.GetKey ("w")){
			isback=1;
			isRight=0;
			isLeft=0;
				gameObject.Find("front").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("right").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("left").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("Idle").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("back").GetComponent(SpriteRenderer).enabled = true;
				gameObject.Find("IdleBack").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("front").GetComponent(Animator).enabled = false;
				gameObject.Find("right").GetComponent(Animator).enabled = false;
				gameObject.Find("left").GetComponent(Animator).enabled = false;
				gameObject.Find("Idle").GetComponent(Animator).enabled = false;
				gameObject.Find("back").GetComponent(Animator).enabled = true;
				gameObject.Find("IdleBack").GetComponent(Animator).enabled = false;
				//left
				gameObject.Find("IdleLeft").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleLeft").GetComponent(SpriteRenderer).enabled = false;
				//right
				gameObject.Find("IdleRight").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleRight").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwRight").GetComponent(Animator).enabled = false;
				gameObject.Find("throwRight").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwLeft").GetComponent(Animator).enabled = false;
				gameObject.Find("throwLeft").GetComponent(SpriteRenderer).enabled = false;
				}
			else if (Input.GetKey ("a")){
				isRight=1;
				isLeft=0;
				isback=0;
				gameObject.Find("front").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("right").GetComponent(SpriteRenderer).enabled = true;
				gameObject.Find("left").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("Idle").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("back").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("IdleBack").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("front").GetComponent(Animator).enabled = false;
				gameObject.Find("right").GetComponent(Animator).enabled = true;
				gameObject.Find("left").GetComponent(Animator).enabled = false;
				gameObject.Find("Idle").GetComponent(Animator).enabled = false;
				gameObject.Find("back").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleBack").GetComponent(Animator).enabled = false;
				//left
				gameObject.Find("IdleLeft").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleLeft").GetComponent(SpriteRenderer).enabled = false;
				//right
				gameObject.Find("IdleRight").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleRight").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwRight").GetComponent(Animator).enabled = false;
				gameObject.Find("throwRight").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwLeft").GetComponent(Animator).enabled = false;
				gameObject.Find("throwLeft").GetComponent(SpriteRenderer).enabled = false;}
			else if (Input.GetKey ("s")){
			isback=0;
			isRight=0;
			isLeft=0;
				gameObject.Find("front").GetComponent(SpriteRenderer).enabled = true;
				gameObject.Find("right").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("left").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("Idle").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("back").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("IdleBack").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("front").GetComponent(Animator).enabled = true;
				gameObject.Find("right").GetComponent(Animator).enabled = false;
				gameObject.Find("left").GetComponent(Animator).enabled = false;
				gameObject.Find("Idle").GetComponent(Animator).enabled = false;
				gameObject.Find("back").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleBack").GetComponent(Animator).enabled = false;
				//left
				gameObject.Find("IdleLeft").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleLeft").GetComponent(SpriteRenderer).enabled = false;
				//right
				gameObject.Find("IdleRight").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleRight").GetComponent(SpriteRenderer).enabled = false;}
			else if (Input.GetKey ("d")){
			isRight=0;
			isLeft=1;
			isback=0;
				gameObject.Find("front").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("right").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("left").GetComponent(SpriteRenderer).enabled = true;
				gameObject.Find("Idle").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("back").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("IdleBack").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("front").GetComponent(Animator).enabled = false;
				gameObject.Find("right").GetComponent(Animator).enabled = false;
				gameObject.Find("left").GetComponent(Animator).enabled = true;
				gameObject.Find("Idle").GetComponent(Animator).enabled = false;
				gameObject.Find("back").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleBack").GetComponent(Animator).enabled = false;
				//left
				gameObject.Find("IdleLeft").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleLeft").GetComponent(SpriteRenderer).enabled = false;
				//right
				gameObject.Find("IdleRight").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleRight").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwRight").GetComponent(Animator).enabled = false;
				gameObject.Find("throwRight").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwLeft").GetComponent(Animator).enabled = false;
				gameObject.Find("throwLeft").GetComponent(SpriteRenderer).enabled = false;
				}
			else if(onSide==0&&onShoot==1){
				gameObject.Find("front").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("right").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("left").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("Idle").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("back").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("IdleBack").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("front").GetComponent(Animator).enabled = false;
				gameObject.Find("right").GetComponent(Animator).enabled = false;
				gameObject.Find("left").GetComponent(Animator).enabled = false;
				gameObject.Find("Idle").GetComponent(Animator).enabled = false;
				gameObject.Find("back").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleBack").GetComponent(Animator).enabled = false;
				//left
				gameObject.Find("IdleLeft").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleLeft").GetComponent(SpriteRenderer).enabled = false;
				//right
				gameObject.Find("IdleRight").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleRight").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwRight").GetComponent(Animator).enabled = true;
				gameObject.Find("throwRight").GetComponent(SpriteRenderer).enabled = true;
				//rightShoot
				gameObject.Find("throwLeft").GetComponent(Animator).enabled = false;
				gameObject.Find("throwLeft").GetComponent(SpriteRenderer).enabled = false;
			}
			else if(onSide==1&&onShoot==1){
				gameObject.Find("front").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("right").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("left").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("Idle").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("back").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("IdleBack").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("front").GetComponent(Animator).enabled = false;
				gameObject.Find("right").GetComponent(Animator).enabled = false;
				gameObject.Find("left").GetComponent(Animator).enabled = false;
				gameObject.Find("Idle").GetComponent(Animator).enabled = false;
				gameObject.Find("back").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleBack").GetComponent(Animator).enabled = false;
				//left
				gameObject.Find("IdleLeft").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleLeft").GetComponent(SpriteRenderer).enabled = false;
				//right
				gameObject.Find("IdleRight").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleRight").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwRight").GetComponent(Animator).enabled = false;
				gameObject.Find("throwRight").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwLeft").GetComponent(Animator).enabled = true;
				gameObject.Find("throwLeft").GetComponent(SpriteRenderer).enabled = true;
			}
			else if(isback==0&&isLeft==0&&isRight==0&&onShoot==0){
				gameObject.Find("front").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("right").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("left").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("Idle").GetComponent(SpriteRenderer).enabled = true;
				gameObject.Find("back").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("IdleBack").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("front").GetComponent(Animator).enabled = false;
				gameObject.Find("right").GetComponent(Animator).enabled = false;
				gameObject.Find("left").GetComponent(Animator).enabled = false;
				gameObject.Find("Idle").GetComponent(Animator).enabled = true;
				gameObject.Find("back").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleBack").GetComponent(Animator).enabled = false;
				//left
				gameObject.Find("IdleLeft").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleLeft").GetComponent(SpriteRenderer).enabled = false;
				//right
				gameObject.Find("IdleRight").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleRight").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwRight").GetComponent(Animator).enabled = false;
				gameObject.Find("throwRight").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwLeft").GetComponent(Animator).enabled = false;
				gameObject.Find("throwLeft").GetComponent(SpriteRenderer).enabled = false;
			}
			else if(isback==1&&isLeft==0&&isRight==0&&onShoot==0){
				gameObject.Find("front").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("right").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("left").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("Idle").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("back").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("IdleBack").GetComponent(SpriteRenderer).enabled = true;
				gameObject.Find("front").GetComponent(Animator).enabled = false;
				gameObject.Find("right").GetComponent(Animator).enabled = false;
				gameObject.Find("left").GetComponent(Animator).enabled = false;
				gameObject.Find("Idle").GetComponent(Animator).enabled = false;
				gameObject.Find("back").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleBack").GetComponent(Animator).enabled = true;
				//left
				gameObject.Find("IdleLeft").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleLeft").GetComponent(SpriteRenderer).enabled = false;
				//right
				gameObject.Find("IdleRight").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleRight").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwRight").GetComponent(Animator).enabled = false;
				gameObject.Find("throwRight").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwLeft").GetComponent(Animator).enabled = false;
				gameObject.Find("throwLeft").GetComponent(SpriteRenderer).enabled = false;
			}
			else if(isRight==1&&isback==0&&isLeft==0&&onShoot==0){
				gameObject.Find("front").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("right").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("left").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("Idle").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("back").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("IdleBack").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("front").GetComponent(Animator).enabled = false;
				gameObject.Find("right").GetComponent(Animator).enabled = false;
				gameObject.Find("left").GetComponent(Animator).enabled = false;
				gameObject.Find("Idle").GetComponent(Animator).enabled = false;
				gameObject.Find("back").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleBack").GetComponent(Animator).enabled = false;
				//left
				gameObject.Find("IdleLeft").GetComponent(Animator).enabled = true;
				gameObject.Find("IdleLeft").GetComponent(SpriteRenderer).enabled = true;
				//right
				gameObject.Find("IdleRight").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleRight").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwRight").GetComponent(Animator).enabled = false;
				gameObject.Find("throwRight").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwLeft").GetComponent(Animator).enabled = false;
				gameObject.Find("throwLeft").GetComponent(SpriteRenderer).enabled = false;
			}
			else if(isLeft==1&&isRight==0&&isback==0&&onShoot==0){
				gameObject.Find("front").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("right").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("left").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("Idle").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("back").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("IdleBack").GetComponent(SpriteRenderer).enabled = false;
				gameObject.Find("front").GetComponent(Animator).enabled = false;
				gameObject.Find("right").GetComponent(Animator).enabled = false;
				gameObject.Find("left").GetComponent(Animator).enabled = false;
				gameObject.Find("Idle").GetComponent(Animator).enabled = false;
				gameObject.Find("back").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleBack").GetComponent(Animator).enabled = false;
				//left
				gameObject.Find("IdleLeft").GetComponent(Animator).enabled = false;
				gameObject.Find("IdleLeft").GetComponent(SpriteRenderer).enabled = false;
				//right
				gameObject.Find("IdleRight").GetComponent(Animator).enabled = true;
				gameObject.Find("IdleRight").GetComponent(SpriteRenderer).enabled = true;
				//rightShoot
				gameObject.Find("throwRight").GetComponent(Animator).enabled = false;
				gameObject.Find("throwRight").GetComponent(SpriteRenderer).enabled = false;
				//rightShoot
				gameObject.Find("throwLeft").GetComponent(Animator).enabled = false;
				gameObject.Find("throwLeft").GetComponent(SpriteRenderer).enabled = false;
			}
		}
		else if(isDeath==1){
			gameObject.Find("front").GetComponent(SpriteRenderer).enabled = false;
			gameObject.Find("right").GetComponent(SpriteRenderer).enabled = false;
			gameObject.Find("left").GetComponent(SpriteRenderer).enabled = false;
			gameObject.Find("Idle").GetComponent(SpriteRenderer).enabled = false;
			gameObject.Find("back").GetComponent(SpriteRenderer).enabled = false;
			gameObject.Find("IdleBack").GetComponent(SpriteRenderer).enabled = false;
			gameObject.Find("front").GetComponent(Animator).enabled = false;
			gameObject.Find("right").GetComponent(Animator).enabled = false;
			gameObject.Find("left").GetComponent(Animator).enabled = false;
			gameObject.Find("Idle").GetComponent(Animator).enabled = false;
			gameObject.Find("back").GetComponent(Animator).enabled = false;
			gameObject.Find("IdleBack").GetComponent(Animator).enabled = false;
			//left
			gameObject.Find("IdleLeft").GetComponent(Animator).enabled = false;
			gameObject.Find("IdleLeft").GetComponent(SpriteRenderer).enabled = false;
			//right
			gameObject.Find("IdleRight").GetComponent(Animator).enabled = false;
			gameObject.Find("IdleRight").GetComponent(SpriteRenderer).enabled = false;
			//rightShoot
			gameObject.Find("throwRight").GetComponent(Animator).enabled = false;
			gameObject.Find("throwRight").GetComponent(SpriteRenderer).enabled = false;
			//rightShoot
			gameObject.Find("throwLeft").GetComponent(Animator).enabled = false;
			gameObject.Find("throwLeft").GetComponent(SpriteRenderer).enabled = false;
			//Death
			gameObject.Find("boyDeath").GetComponent(Animator).enabled = true;
			gameObject.Find("boyDeath").GetComponent(SpriteRenderer).enabled = true;
		}
	}
	else{
		
		gameObject.Find("Idle").GetComponent(SpriteRenderer).enabled = true;
		gameObject.Find("Idle").GetComponent(Animator).enabled = true;
		gameObject.Find("front").GetComponent(SpriteRenderer).enabled = false;
			gameObject.Find("right").GetComponent(SpriteRenderer).enabled = false;
			gameObject.Find("left").GetComponent(SpriteRenderer).enabled = false;
			
			gameObject.Find("back").GetComponent(SpriteRenderer).enabled = false;
			gameObject.Find("IdleBack").GetComponent(SpriteRenderer).enabled = false;
			gameObject.Find("front").GetComponent(Animator).enabled = false;
			gameObject.Find("right").GetComponent(Animator).enabled = false;
			gameObject.Find("left").GetComponent(Animator).enabled = false;
			
			gameObject.Find("back").GetComponent(Animator).enabled = false;
			gameObject.Find("IdleBack").GetComponent(Animator).enabled = false;
			//left
			gameObject.Find("IdleLeft").GetComponent(Animator).enabled = false;
			gameObject.Find("IdleLeft").GetComponent(SpriteRenderer).enabled = false;
			//right
			gameObject.Find("IdleRight").GetComponent(Animator).enabled = false;
			gameObject.Find("IdleRight").GetComponent(SpriteRenderer).enabled = false;
			//rightShoot
			gameObject.Find("throwRight").GetComponent(Animator).enabled = false;
			gameObject.Find("throwRight").GetComponent(SpriteRenderer).enabled = false;
			//rightShoot
			gameObject.Find("throwLeft").GetComponent(Animator).enabled = false;
			gameObject.Find("throwLeft").GetComponent(SpriteRenderer).enabled = false;
			//Death
			gameObject.Find("boyDeath").GetComponent(Animator).enabled = false;
			gameObject.Find("boyDeath").GetComponent(SpriteRenderer).enabled = false;
	}
}