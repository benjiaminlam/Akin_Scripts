﻿// Make the script also execute in edit mode
@script ExecuteInEditMode()
var gSkin : GUISkin;
var backdrop : Texture2D; // our backdrop image goes in here.
private var isLoading = false; // if true, we'll display the "Loading..." message.
static var score:int;

function OnGUI(){
	if (gSkin)
	GUI.skin = gSkin;
	else
	Debug.Log("StartMenuGUI: GUI Skin object missing!");
	
	var backgroundStyle : GUIStyle = new GUIStyle();
	backgroundStyle.normal.background = backdrop;
	GUI.Label ( Rect( (Screen.width - (Screen.height * 2)) * 0.75, 0, Screen.height * 2,
	Screen.height), "", backgroundStyle);
	GUI.Label ( Rect( (Screen.width/2)-70, Screen.height -80, 140, 70),"", "mainMenuTitle");
	if(GUI.Button(Rect((Screen.width/2)-70, Screen.height - 160 , 140, 70),"ReStart Game"))
	{
		isLoading = true;
		Application.LoadLevel("Akin");
	}
	var isWebPlayer = (Application.platform == RuntimePlatform.OSXWebPlayer ||Application.platform == RuntimePlatform.WindowsWebPlayer);
	if(!isWebPlayer)
	{
		if(GUI.Button(Rect((Screen.width/2)-70, Screen.height -80, 140, 70),"Quit"))
			Application.Quit();
	}
	if(isLoading)
	GUI.Label(Rect((Screen.width/2)-110,(Screen.height/2) -60, 400, 70),"Loading...","mainMenuTitle");
}
