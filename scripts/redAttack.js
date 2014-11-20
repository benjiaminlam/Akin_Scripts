#pragma strict
 

//distance that will trigger following action
var distanceDetection: float = 6; //sound play
var distanceAttack: float = 4.5; //attack
var attackSpeed:float; //same attack speed for two type enemies
var rotationSpeed:float;
var attackSpeed_invisible:float;
var detectSpeed:float;
//int 0forword,1left,2right
static var attackDir:int;

function Start(){
    
}
 
function Update () {
    var detectObject = gameObject.Find("player").transform;
	var dist = Vector3.Distance(detectObject.position, transform.position);
	
	if(EnemyDispear.redIsVisable == false)
	{
	    if(dist<distanceAttack)
	    {

	        print("IIIIIII attack");
	        redMoveInvisible(detectObject);
		      
	    }

	}else{
	    if(dist<distanceDetection)
	    {
	    	
	        print("detect");
	        detectMove(detectObject);
	        if(dist<distanceAttack)
	        {
	        	
	            print("attack");
	            redMove(detectObject);
	        }
	    
	    }
	     
	}
 
}
 
function redMove(detectObject:Transform)
{


    var delta = detectObject.position - transform.position;
    var delta_x = detectObject.position.x - transform.position.x;
    delta.Normalize();
   
    transform.position = transform.position + (delta * attackSpeed*Time.deltaTime);
    
    if(delta_x< -1)
    {
    	attackDir = 1;
    }
    else if(delta_x>1)
    {
    	attackDir = 2;
    }
    else if(delta_x >= -1 && delta_x <= 1)
    {
    	attackDir = 0;
    }
 
}
 
 
function redMoveInvisible(detectObject:Transform)
{
    var delta = detectObject.position - transform.position;
    delta.Normalize();
    //transform.rotation = Quaternion.Slerp(transform.rotation, 
            //Quaternion.LookRotation(detectObject.position - transform.position), rotationSpeed * Time.deltaTime);
    transform.position = transform.position + (delta * attackSpeed_invisible*Time.deltaTime);
 
}
 
function detectMove(detectObject:Transform)
{
    var delta = detectObject.position - transform.position;
    delta.Normalize();
    transform.position = transform.position + (delta * detectSpeed*Time.deltaTime);
 
}




