#pragma strict
static var heal=3;
function Start () {
   heal=3;
   gameObject.Find("HUD_Health1").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("HUD_Health2").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("HUD_Health3").GetComponent(MeshRenderer).enabled = true;
}

function Update () {
	if(heal == 0)
   {
   Application.LoadLevel(3);
   gameObject.Find("HUD_Health1").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("HUD_Health2").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("HUD_Health3").GetComponent(MeshRenderer).enabled = false;

   }
   if(heal == 1)
   {
   gameObject.Find("HUD_Health1").GetComponent(MeshRenderer).enabled = true;
   gameObject.Find("HUD_Health2").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("HUD_Health3").GetComponent(MeshRenderer).enabled = false;
   }
   else if(heal == 2)
   {
   gameObject.Find("HUD_Health1").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("HUD_Health2").GetComponent(MeshRenderer).enabled = true;
   gameObject.Find("HUD_Health3").GetComponent(MeshRenderer).enabled = false;
   }
   else if(heal == 3)
   {
   gameObject.Find("HUD_Health1").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("HUD_Health2").GetComponent(MeshRenderer).enabled = false;
   gameObject.Find("HUD_Health3").GetComponent(MeshRenderer).enabled = true;
   }
}