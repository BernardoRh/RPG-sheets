extends Node

var json = JSON.new()
var path = "user://data.json"

var data = {}
var selectedCharacter = {}

func write_save(content):
	var file = FileAccess.open(path, FileAccess.WRITE)
	file.store_string(json.stringify(content))
	file.close()
	file = null


func read_save():
	var file = FileAccess.open(path, FileAccess.READ)
	var content = json.parse_string(file.get_as_text())
	file.close()
	file = null
	return content

func create_new_save_file():
	var file = FileAccess.open("res://scripts/default_save.json", FileAccess.READ)
	var content = json.parse_string(file.get_as_text())
	data = content
	write_save(content)

func changeSelectedCharacter(characterName):
	for character in data.characters:
		print(character)

func _ready():
	print("File Testing")
	var file = FileAccess.open(path, FileAccess.READ)
	if(file == null):
		print("File Null")
		create_new_save_file()
	else:
		print("File Exists")
		data = read_save()
	print(data)
