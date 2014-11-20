#pragma strict
var boyEnable:boolean;
var creatureEnable:boolean;
static var separated:boolean;
var boyController:ThirdPersonController;
var creatureController:ThirdPersonController;
var boyFollow:BoyFollowCreature;
var creatureFollow:CreatureFollowBoy;
var boyPopup:popupControl;
var creaturePopup:popupControl;
var enemyDispear:EnemyDispear;
var cameraController:myCameraController;
var	distanceforLevelAkin:float = 5;
var distanceforLevelMorning:float =5; 

static var isBoyAlone:boolean;
static var isCreatureAlone:boolean;

var xvalue:float = 0.0;
var yvalue:float = 0.0;
var zvalue:float = 5.0;

var boyShootController:Shoot;
var creatureShootController:Shoot;
var boyTargetController:CheckClosestEnemy;
var creatureTargetController:CheckClosestEnemy;

var distance:float;

function Start () {
   separated = false;
   boyController = gameObject.Find("player").GetComponent("ThirdPersonController");
   creatureController = gameObject.Find("player2").GetComponent("ThirdPersonController");
   boyFollow = gameObject.Find("player").GetComponent("BoyFollowCreature");
   creatureFollow = gameObject.Find("player2").GetComponent("CreatureFollowBoy");
   boyShootController = gameObject.Find("player").GetComponent("Shoot");
   creatureShootController = gameObject.Find("player2").GetComponent("Shoot");
   boyTargetController = gameObject.Find("player").GetComponent("CheckClosestEnemy");
   creatureTargetController = gameObject.Find("player2").GetComponent("CheckClosestEnemy");
   boyPopup = gameObject.Find("player").GetComponent("popupControl");
   creaturePopup = gameObject.Find("player2").GetComponent("popupControl");
   
    boyEnable=false;
   creatureEnable=true;
   
   //enemyDispear = gameObject.Find("player").GetComponent("EnemyDispear");
   //cameraController = gameObject.Find("Camera Pivot").GetComponent("myCameraController");
}


function Update () {
	distance = Vector3.Distance(gameObject.Find("player").transform.position, gameObject.Find("player2").transform.position);
	if(distance > distanceforLevelMorning)
	{
		creatureAloneMode();
	}
	else
	{
		generalPlayMode();
	}
	 
}
//Akin
function levelOnePlayMode(dis:float){
	
}
//Evening
function levelTwoPlayMode(){
	generalPlayMode();
}

//Night
function levelThreePlayMode(){
	generalPlayMode();
}

//Night2
function levelFourPlayMode(){
	creatureAloneMode();
}

//Morning
function levelFivePlayMode(dis:float){
	if(dis > distanceforLevelMorning)
	{
		creatureAloneMode();
	}
	else
	{
		generalPlayMode();
	}
}

//MiddayRevisit
function levelSixPlayMode(){
	generalPlayMode();
}

//enabled move together and seperate
function generalPlayMode() {
	
	if(Input.GetKeyDown("p"))
	{
		separated=!separated;
	}
   if(separated == false && distance <= 5.0)
   {
   		TogetherMove();
   		
   }
   else
   {
   		SeparatedMove();
   		
   }
   
}

function boyAloneMode()
{
	//turn on all scripts on boy
	boyFollow.enabled = false;
	creatureFollow.enabled = false;
	
	boyController.enabled = true;
	creatureController.enabled = false;
	
	boyShootController.enabled = true;
	creatureShootController.enabled = false;
	
	boyTargetController.enabled = true;
	creatureTargetController.enabled = false;
	
	CreatureAnimationController.keepIdle = true;
	BoyAnimationController.keepIdle = false;
	
	boyPopup.enabled = true;
	creaturePopup.enabled = false;
	
	//enemyDispear.enabled = false;
	
	isBoyAlone = true;
	//cameraController.enabled = false;
}

function creatureAloneMode()
{	
	//turn on all scripts on creature
	boyController.enabled = false;
	creatureController.enabled = true;
	
	creatureFollow.enabled = false;
	boyFollow.enabled = false;
	
	boyShootController.enabled = false;
	creatureShootController.enabled = true;
	
	boyTargetController.enabled = false;
	creatureTargetController.enabled = true;
	
	CreatureAnimationController.keepIdle = false;
	BoyAnimationController.keepIdle = true;
	
	creaturePopup.enabled=true;
	boyPopup.enabled = false;
	
	//enemyDispear.enabled = false;
	
	isCreatureAlone = true;
	//cameraController.enabled = false;

}
function TogetherMove(){
	 //change controller
	isCreatureAlone = false;
	isBoyAlone = false;
    //enemyDispear.enabled = true;
   //cameraController.enabled = true;
   if(Input.GetKeyDown("space"))
   {
     boyEnable=!boyEnable;
     creatureEnable=!creatureEnable;
   }
   
   if(boyEnable == true)
   {
   	//enable boy
     boyController.enabled = true;
     boyFollow.enabled = false;
     boyShootController.enabled = true;
     boyTargetController.enabled = true;
     boyPopup.enabled = true;
     
     //diable creature
     creatureController.enabled = false;
     creatureFollow.enabled = true;
     creatureShootController.enabled = false;
     creatureTargetController.enabled = false;
     creaturePopup.enabled = false;
     
     CreatureAnimationController.keepIdle = false;
	 BoyAnimationController.keepIdle = false;
     
     
     if(Vector3.Distance(gameObject.Find("player").transform.position, gameObject.Find("player2").transform.position)>10)
     {
     	gameObject.Find("player2").transform.position.x = gameObject.Find("player").transform.position.x-xvalue;
     	gameObject.Find("player2").transform.position.y = gameObject.Find("player").transform.position.y-yvalue;
     	gameObject.Find("player2").transform.position.z = gameObject.Find("player").transform.position.z-zvalue;
     	
     }
     
   }
   else
   {
   		//disable boy
      boyController.enabled = false;
      boyFollow.enabled = true;
      boyShootController.enabled = false;
      boyPopup.enabled = false;
      
      //eable creature
      creatureController.enabled = true;
      creatureFollow.enabled = false;
      creatureShootController.enabled = true;
      creaturePopup.enabled = true;
      
      boyTargetController.enabled = false;
	  creatureTargetController.enabled = true;
	  
	  CreatureAnimationController.keepIdle = false;
	  BoyAnimationController.keepIdle = false;
     
     if(Vector3.Distance(gameObject.Find("player2").transform.position, gameObject.Find("player").transform.position)>10)
     {
     	gameObject.Find("player").transform.position.x = gameObject.Find("player2").transform.position.x;
     	gameObject.Find("player").transform.position.y = gameObject.Find("player2").transform.position.y;
     	gameObject.Find("player").transform.position.z = gameObject.Find("player2").transform.position.z-6;
     	
     }
   }
   
   
	
}

function SeparatedMove(){

	isCreatureAlone = false;
	//enemyDispear.enabled = true;
	//cameraController.enabled = true;
	
	boyFollow.enabled = false;
	creatureFollow.enabled = false;
	var seperate_dis = Vector3.Distance(gameObject.Find("player2").transform.position, gameObject.Find("player").transform.position);
	// change controller and camera
	if(Input.GetKeyDown("space"))
	{
		boyEnable=!boyEnable;
		creatureEnable=!creatureEnable;
	}
	if(boyEnable == true)
	{
		boyController.enabled = true;
		creatureController.enabled = false;
		boyShootController.enabled = true;
		creatureShootController.enabled = false;
		boyTargetController.enabled = true;
		creatureTargetController.enabled = false;
		CreatureAnimationController.keepIdle = true;
		BoyAnimationController.keepIdle = false;
		boyPopup.enabled = true;
		creaturePopup.enabled = false;
		
		
	}
	if(creatureEnable == true)
	{
		boyController.enabled = false;
		creatureController.enabled = true;
		boyShootController.enabled = false;
		creatureShootController.enabled = true;
		boyTargetController.enabled = false;
		creatureTargetController.enabled = true;
		CreatureAnimationController.keepIdle = false;
		BoyAnimationController.keepIdle = true;
		creaturePopup.enabled = true;
		boyPopup.enabled = false;
	}
	
	if(Application.loadedLevelName == "Night")
	{
		addNightLayers(seperate_dis);
	}
	
}

function addNightLayers(seperate_dis:float)
{
		if(seperate_dis >10)
	{
		gameObject.Find("gNight_screen_dark1").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark2").GetComponent(MeshRenderer).enabled=false;
		gameObject.Find("gNight_screen_dark3").GetComponent(MeshRenderer).enabled=false;
		gameObject.Find("gNight_screen_dark4").GetComponent(MeshRenderer).enabled=false;
		gameObject.Find("gNight_screen_dark5").GetComponent(MeshRenderer).enabled=false;
		gameObject.Find("gNight_screen_dark6").GetComponent(MeshRenderer).enabled=false;
		gameObject.Find("gNight_screen_dark7").GetComponent(MeshRenderer).enabled=false;
		gameObject.Find("gNight_screen_dark8").GetComponent(MeshRenderer).enabled=false;
		
	}
	if(seperate_dis >15)
	{
		gameObject.Find("gNight_screen_dark1").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark2").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark3").GetComponent(MeshRenderer).enabled=false;
		gameObject.Find("gNight_screen_dark4").GetComponent(MeshRenderer).enabled=false;
		gameObject.Find("gNight_screen_dark5").GetComponent(MeshRenderer).enabled=false;
		gameObject.Find("gNight_screen_dark6").GetComponent(MeshRenderer).enabled=false;
		gameObject.Find("gNight_screen_dark7").GetComponent(MeshRenderer).enabled=false;
		gameObject.Find("gNight_screen_dark8").GetComponent(MeshRenderer).enabled=false;
			
	}
	if(seperate_dis >20)
	{
		gameObject.Find("gNight_screen_dark1").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark2").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark3").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark4").GetComponent(MeshRenderer).enabled=false;
		gameObject.Find("gNight_screen_dark5").GetComponent(MeshRenderer).enabled=false;
		gameObject.Find("gNight_screen_dark6").GetComponent(MeshRenderer).enabled=false;
		gameObject.Find("gNight_screen_dark7").GetComponent(MeshRenderer).enabled=false;
		gameObject.Find("gNight_screen_dark8").GetComponent(MeshRenderer).enabled=false;
			
	}
			
	if(seperate_dis >25)
	{
		gameObject.Find("gNight_screen_dark1").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark2").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark3").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark4").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark5").GetComponent(MeshRenderer).enabled=false;
		gameObject.Find("gNight_screen_dark6").GetComponent(MeshRenderer).enabled=false;
		gameObject.Find("gNight_screen_dark7").GetComponent(MeshRenderer).enabled=false;
		gameObject.Find("gNight_screen_dark8").GetComponent(MeshRenderer).enabled=false;
	}
	if(seperate_dis >30)
	{
		gameObject.Find("gNight_screen_dark1").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark2").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark3").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark4").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark5").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark6").GetComponent(MeshRenderer).enabled=false;
		gameObject.Find("gNight_screen_dark7").GetComponent(MeshRenderer).enabled=false;
		gameObject.Find("gNight_screen_dark8").GetComponent(MeshRenderer).enabled=false;
			
	}
	if(seperate_dis >35)
	{
		gameObject.Find("gNight_screen_dark1").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark2").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark3").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark4").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark5").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark6").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark7").GetComponent(MeshRenderer).enabled=false;
		gameObject.Find("gNight_screen_dark8").GetComponent(MeshRenderer).enabled=false;
			
	}
	if(seperate_dis >40)
	{
		gameObject.Find("gNight_screen_dark1").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark2").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark3").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark4").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark5").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark6").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark7").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark8").GetComponent(MeshRenderer).enabled=false;
			
	}
	if(seperate_dis >35)
	{
		gameObject.Find("gNight_screen_dark1").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark2").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark3").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark4").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark5").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark6").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark7").GetComponent(MeshRenderer).enabled=true;
		gameObject.Find("gNight_screen_dark8").GetComponent(MeshRenderer).enabled=true;
			
	}
	
}
	
