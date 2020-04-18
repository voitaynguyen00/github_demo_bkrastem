////////////////////////event
Blockly.Blocks['event1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when the phone/tablet")
        .appendField(new Blockly.FieldDropdown([["tilt left","L"], ["tilt right","R"], ["tilt up","U"], ["tilt down","D"], ["tilt swing","S"]]), "tilt");
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['event2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("where there are obstacles in front");
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['event3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when the IR sensor")
        .appendField(new Blockly.FieldDropdown([["1","sensor1"], ["2","sensor2"], ["3","sensor3"]]), "IDsensor")
        .appendField("distance from obstacle")
        .appendField(new Blockly.FieldDropdown([[">=","lonbang"], ["<=","nhobang"], [">","lon"], ["<","nho"], ["!=","khac"], ["=","bang"]]), "compare")
        .appendField(new Blockly.FieldDropdown([["10","10cm"], ["20","20cm"], ["30","30cm"]]), "distance")
        .appendField("cm");
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
//////////////////////////////move
Blockly.Blocks['move1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["move forward","w"], ["move backward","s"], ["move left","a"], ["move right","d"]]), "move")
        .appendField(", speed ")
        .appendField(new Blockly.FieldDropdown([["slow","sl"], ["middle","mid"], ["fast","fa"]]), "speed")
        .appendField(", reflectance ")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"]]), "stop")
        .appendField(" steps");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["move forward","w"], ["move backward","s"], ["move left","a"], ["move right","d"]]), "move")
        .appendField(", speed")
        .appendField(new Blockly.FieldDropdown([["slow","sl"], ["middle","mid"], ["fast","fa"]]), "speed");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['move3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("stop action");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

///////////////////////////////////////////////event
Blockly.JavaScript['event1'] = function(block) {
  var dropdown_tilt = block.getFieldValue('tilt');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['event2'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['event3'] = function(block) {
  var dropdown_idsensor = block.getFieldValue('IDsensor');
  var dropdown_compare = block.getFieldValue('compare');
  var dropdown_distance = block.getFieldValue('distance');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

/////////////////////////////////////////////move
Blockly.JavaScript['move1'] = function(block) {
  var dropdown_move = block.getFieldValue('move');
  var dropdown_speed = block.getFieldValue('speed');
  var dropdown_stop = block.getFieldValue('stop');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['move2'] = function(block) {
  var dropdown_move = block.getFieldValue('move');
  var dropdown_speed = block.getFieldValue('speed');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['move3'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};