#pragma strict

function Start () {
   PickUpBullet.numberofbullet = 0;
   gameObject.Find("HUD_rock0").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("HUD_rock1").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("HUD_rock2").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("HUD_rock3").GetComponent(MeshRenderer).enabled = false;
}

function Update () {
	if(PickUpBullet.numberofbullet == 0)
   {
   gameObject.Find("HUD_rock0").GetComponent(MeshRenderer).enabled = true;
   gameObject.Find("HUD_rock1").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("HUD_rock2").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("HUD_rock3").GetComponent(MeshRenderer).enabled = false;
   }
   if(PickUpBullet.numberofbullet == 1)
   {
   gameObject.Find("HUD_rock0").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("HUD_rock1").GetComponent(MeshRenderer).enabled = true;
   gameObject.Find("HUD_rock2").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("HUD_rock3").GetComponent(MeshRenderer).enabled = false;
   }
   else if(PickUpBullet.numberofbullet == 2)
   {
   gameObject.Find("HUD_rock0").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("HUD_rock1").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("HUD_rock2").GetComponent(MeshRenderer).enabled = true;
   gameObject.Find("HUD_rock3").GetComponent(MeshRenderer).enabled = false;
   }
   else if(PickUpBullet.numberofbullet == 3)
   {
   gameObject.Find("HUD_rock0").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("HUD_rock1").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("HUD_rock2").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("HUD_rock3").GetComponent(MeshRenderer).enabled = true;
   }
}