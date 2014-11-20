#pragma strict
var enemyHealth:int=1;
//static var isDeath:int;
function OnTriggerEnter(other : Collider){
	if(other.gameObject.tag=="throwRock"){
		enemyHealth-=1;
		Destroy(other.gameObject);
		
		
	}
	if(enemyHealth<=0){
	//after throw stone 1 sec, then destoy the enemy
	yield WaitForSeconds (1);
	EnemyDispear.death=1;
	//rigidbody.constraints=RigidbodyConstraints.FreezePosition;
	//print(EnemyDispear.death);
	/*for (var child:GameObject in selfObject)
      {
      		print(child);
      		if(child.name=="death"){
      			child.GetComponent(SpriteRenderer).enabled=true;
				child.GetComponent(Animator).enabled=true;
			}
			else{
				//child.GetComponent(SpriteRenderer).enabled=false;
				//child.GetComponent(Animator).enabled=false;
				Destroy(child);
			}
			
      	}*/
		yield WaitForSeconds (1);
		EnemyDispear.death=0;
		Destroy(gameObject);
		//Destroy(other.gameObject);
		
	}
	
}
function waitfortime(){
	yield WaitForSeconds (1);
}