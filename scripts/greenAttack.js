#pragma strict
 

//distance that will trigger following action
var distanceDetection: float; //sound play
var distanceAttack: float; //attack
var attackSpeed:float; //same attack speed for two type enemies
var rotationSpeed:float;
var attackSpeed_invisible:float;
var detectSpeed:float;
//var characterPhysics:CapsuleCollider;
//var greenInitPosition: Transform;

function Start(){
    //characterPhysics = gameObject.Find("Monster_green_object").GetComponent("CapsuleCollider");
    //greenInitPosition.position = transform.position;
}
 
function Update () {
     
     	var detectObject = gameObject.Find("player2").transform;
        var dist = Vector3.Distance(detectObject.position, transform.position);
         
        if(EnemyDispear.redIsVisable == true)
        {
            if(dist<distanceAttack)
            {
        
                print("IIIIIII attack");
                greenMoveInvisible(detectObject);
            }
 
        }else{
            if(dist<distanceDetection)
            {
                print("detect");
                detectMove(detectObject);
                if(dist<distanceAttack)
                {
        
                    print("attack");
                    greenMove(detectObject);
                }
                 
 
            }
             
        }
         
}
 
function greenMove(detectObject:Transform)
{
    var delta = detectObject.position - transform.position;
    delta.Normalize();
    //transform.rotation = Quaternion.Slerp(transform.rotation, 
            //Quaternion.LookRotation(detectObject.position - transform.position), rotationSpeed * Time.deltaTime);
    transform.position = transform.position + (delta * attackSpeed*Time.deltaTime);
 
}
 
 
function greenMoveInvisible(detectObject:Transform)
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
    //transform.rotation = Quaternion.Slerp(transform.rotation, 
            //Quaternion.LookRotation(detectObject.position - transform.position), rotationSpeed * Time.deltaTime);
    transform.position = transform.position + (delta * detectSpeed*Time.deltaTime);
 
}

function OnCollisionEnter(collision:Collision)
{
    print("Hitted Player ________________________");
    if(collision.gameObject.tag=="Player")
    {
        //characterPhysics.enabled = false;
        gameObject.Find("player").transform.position=gameObject.Find("Respawn").transform.position;
        gameObject.Find("player2").transform.position=gameObject.Find("Respawn2").transform.position;
        Destroy(gameObject);
        HUD_heal_change.heal-=1;
        yield WaitForSeconds(1);
        //transform.position = greenInitPosition.position;
        //characterPhysics.enabled = true;
    }
    if(HUD_heal_change.heal<=0)
    {
        HUD_heal_change.heal=0;
        Application.LoadLevel("GameOver");
    }
}
