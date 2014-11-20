#pragma strict
static var redIsVisable:boolean;
static var greenIsVisable:boolean;
var tempDistance:float;
var animationControl;
var enemyHealth:int=1;
static var death:int=0;

var soundPlay:boolean=false;



//tempdistance should be same as checkCloseEnemy.attackDistance
//all the distance should be add 8 
function Start(){
	if(Application.loadedLevelName == "Morning"||Application.loadedLevelName == "Night2")
	{
		redIsVisable= false;
		greenIsVisable=true;
	}
	else if(Application.loadedLevelName == "Akin"||Application.loadedLevelName == "Evening"||Application.loadedLevelName == "Night"
	||Application.loadedLevelName == "MiddayRevisit")
	{
		redIsVisable= true;
		greenIsVisable=false;
	}
	
}
function Update () {
   
   
   if(ChangeController.isBoyAlone==true)
   {
   		redIsVisable = true;
   }
   else if(ChangeController.isCreatureAlone == true)
   {
   		redIsVisable = false;
   }
   else if(ChangeController.isBoyAlone==false && ChangeController.isCreatureAlone == false )
   {
   		if(Input.GetKeyDown("space"))
   		{
   			redIsVisable = !redIsVisable;
   			greenIsVisable = !greenIsVisable;
   		
   		}
   }
   
   /*else if(Input.GetKeyDown("space"))
   {
   redIsVisable = true;
   blueIsVisable = false;
   }*/
   if(redIsVisable == false)
   {
      for (var o : GameObject in GameObject.FindGameObjectsWithTag("green"))
	      {
		      	tempDistance = Vector3.Distance (gameObject.Find("player2").transform.position, o.transform.position);
		      
		   if(death==0){
		      	if(tempDistance<6){
		      	
		      		if(o.name=="attack")
				      	{
				      		o.GetComponent(SpriteRenderer).enabled=true;
				      	
							o.GetComponent(Animator).enabled=true;
							o.audio.Play();
							
					
				      	}
				      	else{
				      		o.GetComponent(SpriteRenderer).enabled=false;
				      	
							o.GetComponent(Animator).enabled=false;
				      	}
			 
				            
				       
		      	}
		      	
		      	else if(tempDistance<8&&tempDistance>=6){

		      		if(o.name=="alert_idle")
			      	{
			      		o.GetComponent(SpriteRenderer).enabled=true;
			      	
						o.GetComponent(Animator).enabled=true;
						o.audio.Play();
					
			      	}
		      		else{
			      		o.GetComponent(SpriteRenderer).enabled=false;
			      	
						o.GetComponent(Animator).enabled=false;
			      	}
			      	
		      	}
		      	
		      	else if(tempDistance<10&&tempDistance>=8){
		      		if(o.name=="Inquisitive")
			      	{
			      		o.GetComponent(SpriteRenderer).enabled=true;
			      	
						o.GetComponent(Animator).enabled=true;
						o.audio.Play();
						
			      	}
		      		else{
			      		o.GetComponent(SpriteRenderer).enabled=false;
			      	
						o.GetComponent(Animator).enabled=false;
			      	}
		      	}
		      	
		      	else if(tempDistance>10){
		      		if(o.name=="idle")
			      	{
			      		o.GetComponent(SpriteRenderer).enabled=true;
			      	
						o.GetComponent(Animator).enabled=true;
					
			      	}
			      	else{
			      		o.GetComponent(SpriteRenderer).enabled=false;
			      	
						o.GetComponent(Animator).enabled=false;
			      	}
		     	}
		     }
		     else if(death==1&&tempDistance<10){
					
					if(o.name=="death")
			      	{
			      		
			      		o.GetComponent(SpriteRenderer).enabled=true;
			      	
						o.GetComponent(Animator).enabled=true;
						o.audio.Play();
					
			      	}
			      	else{
			      		o.GetComponent(SpriteRenderer).enabled=false;
			      	
						o.GetComponent(Animator).enabled=false;
			      	}
	      	}
	      }
      for (var o : GameObject in GameObject.FindGameObjectsWithTag("red"))
      {
      	o.GetComponent(SpriteRenderer).enabled=false;
      	
		o.GetComponent(Animator).enabled=false;
    //Only try to disable the component if it exists on the current GameObject
         
      }
   //gameObject.FindGameObjectsWithTag("green").GetComponent(MeshRenderer).enabled = true;
   //gameObject.FindGameObjectsWithTag("red").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("green").GetComponent(MeshRenderer).enabled = true;
   gameObject.Find("green_dark").GetComponent(MeshRenderer).enabled = true;
   }
   
   if(redIsVisable == true)
   {
      for (var o : GameObject in GameObject.FindGameObjectsWithTag("red"))
      {
	      	tempDistance = Vector3.Distance (gameObject.transform.position, o.transform.position);
	      
	      	if(death==0){
	      	if(tempDistance<2.5){
	      		if(o.name=="attack")
				      	{
				      		o.GetComponent(SpriteRenderer).enabled=true;
				      	
							o.GetComponent(Animator).enabled=true;
							o.audio.Play();
						
				      	}
				      	else{
				      		o.GetComponent(SpriteRenderer).enabled=false;
				      	
							o.GetComponent(Animator).enabled=false;
				      	}
	      		}
	      		else if(tempDistance > 2.5 && tempDistance < 5)
	      		{
			      	if(redAttack.attackDir==0)
			      		{
			      			if(o.name=="run_forward")
					      	{
					      		o.GetComponent(SpriteRenderer).enabled=true;
					      	
								o.GetComponent(Animator).enabled=true;
					      	}
					      	else{
					      		o.GetComponent(SpriteRenderer).enabled=false;
					      	
								o.GetComponent(Animator).enabled=false;
					      	}
			      		
			      		}else if(redAttack.attackDir==1)//left
			      		{
				      		if(o.name=="run_right")
					      	{
					      		o.GetComponent(SpriteRenderer).enabled=true;
					      	
								o.GetComponent(Animator).enabled=true;
					      	}
					      	else{
					      		o.GetComponent(SpriteRenderer).enabled=false;
					      	
								o.GetComponent(Animator).enabled=false;
					      	}
			      		}else if(redAttack.attackDir==2)//right
			      		{
			      			if(o.name=="run_left")
					      	{
					      		o.GetComponent(SpriteRenderer).enabled=true;
					      	
								o.GetComponent(Animator).enabled=true;
					      	}
					      	else{
					      		o.GetComponent(SpriteRenderer).enabled=false;
					      	
								o.GetComponent(Animator).enabled=false;
					      	}
			      			
			      		}
		      		
		      		
	      	}
	      	else if(tempDistance>5&&tempDistance<=6){
	      		if(o.name=="alert_roar")
		      	{
		      		o.GetComponent(SpriteRenderer).enabled=true;
		      	
					o.GetComponent(Animator).enabled=true;
					o.audio.Play();
					
		      	}
	      		else{
		      		o.GetComponent(SpriteRenderer).enabled=false;
		      	
					o.GetComponent(Animator).enabled=false;
		      	}
		      	
			}
			else if(tempDistance<8&&tempDistance>=6){
	      		if(o.name=="alert_idle")
		      	{
		      		o.GetComponent(SpriteRenderer).enabled=true;
		      	
					o.GetComponent(Animator).enabled=true;
					o.audio.Play();
					
		      	}
	      		else{
		      		o.GetComponent(SpriteRenderer).enabled=false;
		      	
					o.GetComponent(Animator).enabled=false;
		      	}
		      	
			}
	      	
	      	else if(tempDistance<10&&tempDistance>=8){
	      		if(o.name=="inquisitive")
		      	{
		      		o.GetComponent(SpriteRenderer).enabled=true;
		      	
					o.GetComponent(Animator).enabled=true;
					o.audio.Play();
				
		      	}
	      		else{
		      		o.GetComponent(SpriteRenderer).enabled=false;
		      	
					o.GetComponent(Animator).enabled=false;
		      	}
	      	}
	      	
	      	else if(tempDistance>10){
	      		if(o.name=="idle")
		      	{
		      		o.GetComponent(SpriteRenderer).enabled=true;
		      	
					o.GetComponent(Animator).enabled=true;
		      	}
		      	else{
		      		o.GetComponent(SpriteRenderer).enabled=false;
		      	
					o.GetComponent(Animator).enabled=false;
		      	}
	      	}
	      	}
	      	else if(death==1&&tempDistance<10){
	      			
					if(o.name=="death")
			      	{
			      		
			      		o.GetComponent(SpriteRenderer).enabled=true;
			      	
						o.GetComponent(Animator).enabled=true;
						o.audio.Play();
						
			      	}
			      	else{
			      		o.GetComponent(SpriteRenderer).enabled=false;
			      	
						o.GetComponent(Animator).enabled=false;
			      	}
	      	}
      }
    //Only try to disable the component if it exists on the current GameObject
      for (var o : GameObject in GameObject.FindGameObjectsWithTag("green"))
      {
        o.GetComponent(SpriteRenderer).enabled=false;
      	
		o.GetComponent(Animator).enabled=false;
    //Only try to disable the component if it exists on the current GameObject
         
      }
   //gameObject.FindGameObjectsWithTag("red").GetComponent(MeshRenderer).enabled = true;
   //gameObject.FindGameObjectsWithTag("green").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("green").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("green_dark").GetComponent(MeshRenderer).enabled = false;
   }
   
}