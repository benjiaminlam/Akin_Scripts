#pragma strict
 private var objs:Transform;
var distance:float;
var tempDistance:float;
var attackDistance:float;
 private var target:Transform;
function Start () {
	
	if(gameObject.transform.name=="player")
	{
		objs=gameObject.Find("monsters_red").transform;
		
	}else if(gameObject.transform.name=="player2")
	{
		objs=gameObject.Find("monsters_green").transform;
		
	}
	target=gameObject.Find("Target").transform;
	distance = Vector3.Distance(gameObject.transform.position, objs.transform.position);
}

function Update () {
	if (Input.GetKeyDown (KeyCode.LeftAlt)) {
			for(var obj:Transform in objs) {
				tempDistance = Vector3.Distance (gameObject.transform.position, obj.transform.position);
				if (distance > tempDistance) {
						//distance=tempDistance;
						if(tempDistance < attackDistance)
						{
							target.transform.position =Vector3(obj.transform.position.x+0.5, obj.transform.position.y+1.55, obj.transform.position.z+1.2);
							if(obj.transform.position.x>=gameObject.transform.position.x){
								BoyAnimationController.onSide=1;
								CreatureAnimationController.onSide=1;}
							else{
								BoyAnimationController.onSide=0;
								CreatureAnimationController.onSide=0;}
							Shoot.targetPosition=obj;
							//Shoot2.targetPosition=obj;
						}
				}
				distance = tempDistance;
			}
		}
		else if(Input.GetKeyUp (KeyCode.LeftAlt)|| Input.GetKeyDown ("j")) {
			target.position =Vector3(100000,100000,100000);
		}
}