#pragma strict

var FirePoint:Transform;
var Bullet:Rigidbody;
var BulletSpeed:float;
public static var targetPosition:Transform;
function Update () {
	if(Input.GetKeyDown("j")){
		if(PickUpBullet.numberofbullet>0){
			var clone:Rigidbody;
			var step = BulletSpeed * Time.deltaTime;
			clone = Instantiate(Bullet,FirePoint.position,FirePoint.rotation);
			//clone.velocity = transform.TransformDirection(Vector3.forward*BulletSpeed);
		clone.position = Vector3.MoveTowards(targetPosition.transform.position, FirePoint.transform.position, step);
		
			if(EnemyDispear.redIsVisable==true){
				BoyAnimationController.onShoot=1;}
			if(EnemyDispear.greenIsVisable==true){
				CreatureAnimationController.onShoot=1;}
			PickUpBullet.numberofbullet--;
			waitfortime();
			}
		else{ 
			Debug.Log("not enough bullet");
			}
	}
}
function waitfortime(){
	yield WaitForSeconds (1);
	BoyAnimationController.onShoot=0;
	CreatureAnimationController.onShoot=0;
}