#pragma strict
var distanceDetection: float; //sound play
var distanceAttack: float; //attack
var detectObject : Transform; 
	var dist : float;
static var object:GameObject;
function start()
{
		gameObject.Find("inquisitive").GetComponent(SpriteRenderer).enabled = false;
		gameObject.Find("inquisitive").GetComponent(Animator).enabled = false;;
		gameObject.Find("alert_idle").GetComponent(SpriteRenderer).enabled = false;
		gameObject.Find("alert_idle").GetComponent(Animator).enabled = false;
		gameObject.Find("alert_roar").GetComponent(SpriteRenderer).enabled = false;
		gameObject.Find("alert_roar").GetComponent(Animator).enabled = false;
		gameObject.Find("attack").GetComponent(SpriteRenderer).enabled = false;
		gameObject.Find("attack").GetComponent(Animator).enabled = false;
	
}

function Update () {
	detectObject = gameObject.Find("player").transform; 
	dist = Vector3.Distance(detectObject.position, transform.position);
	
	if(dist<distanceDetection&&dist>distanceAttack)
    {
    	gameObject.Find("inquisitive").GetComponent(SpriteRenderer).enabled = true;
		gameObject.Find("inquisitive").GetComponent(Animator).enabled = true;
		gameObject.Find("alert_idle").GetComponent(SpriteRenderer).enabled = false;
		gameObject.Find("alert_idle").GetComponent(Animator).enabled = false;
		gameObject.Find("alert_roar").GetComponent(SpriteRenderer).enabled = false;
		gameObject.Find("alert_roar").GetComponent(Animator).enabled = false;
		gameObject.Find("attack").GetComponent(SpriteRenderer).enabled = false;
		gameObject.Find("attack").GetComponent(Animator).enabled = false;
        print("detect");
     } 
     else if(dist<distanceAttack)
        {
        	gameObject.Find("inquisitive").GetComponent(SpriteRenderer).enabled = false;
			gameObject.Find("inquisitive").GetComponent(Animator).enabled = false;
			gameObject.Find("alert_idle").GetComponent(SpriteRenderer).enabled = false;
			gameObject.Find("alert_idle").GetComponent(Animator).enabled = false;
			gameObject.Find("alert_roar").GetComponent(SpriteRenderer).enabled = false;
			gameObject.Find("alert_roar").GetComponent(Animator).enabled = false;
			gameObject.Find("attack").GetComponent(SpriteRenderer).enabled = true;
			gameObject.Find("attack").GetComponent(Animator).enabled = true;
            
        }
         

    else{
    	gameObject.Find("inquisitive").GetComponent(SpriteRenderer).enabled = false;
		gameObject.Find("inquisitive").GetComponent(Animator).enabled = false;;
		gameObject.Find("alert_idle").GetComponent(SpriteRenderer).enabled = false;
		gameObject.Find("alert_idle").GetComponent(Animator).enabled = false;
		gameObject.Find("alert_roar").GetComponent(SpriteRenderer).enabled = false;
		gameObject.Find("alert_roar").GetComponent(Animator).enabled = false;
		gameObject.Find("attack").GetComponent(SpriteRenderer).enabled = false;
		gameObject.Find("attack").GetComponent(Animator).enabled = false;
    }
}