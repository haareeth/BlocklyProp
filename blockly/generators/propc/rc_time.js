/*

  This file contains support for RC charge & discharge
  
  Author: Vale Tolpegin ( valetolpegin@gmail.com )
  
 *Copyright 2014 Vale Tolpegin.
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 
*/
'use strict';

if ( !Blockly.Language )
  Blockly.Language = {};

//Creating GUI blocks for RC charge and discharge
Blockly.Language.rc_charge = {
  category: 'Sensors', //SWITCH TO A BETTER FITTING CATEGORY?
  helpUrl: '',
  init: function() {
    this.setColour( 300 );
    this.appendDummyInput( "" )
      .appendTitle( "rc charge" )
      .appendTitle( "Pin" )
      .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "PIN" );
    this.appendValueInput( 'TIME' )
      .appendTitle( "Time" );
    this.setNextStatement( false, null );
    this.setPreviousStatement( false, null );
    this.setOutput( true, Number );
  }
};

Blockly.Language.rc_discharge = {
  category: 'Sensors', //SWITCH TO A BETTER FITTING CATEGORY?
  helpUrl: '',
  init: function() {
    this.setColour( 300 );
    this.appendDummyInput( "" )
      .appendTitle( "rc discharge" )
      .appendTitle( "Pin" )
      .appendTitle( new Blockly.FieldDropdown( profile.default.digital ), "PIN" );
    this.appendValueInput( 'TIME' )
      .appendTitle( "Time" );
    this.setNextStatement( false, null );
    this.setPreviousStatement( false, null );
    this.setOutput( true, Number );
  }
};

//Get generator
Blockly.propc = Blockly.Generator.get( 'propc' );

//Create code for blocks
Blockly.propc.rc_charge = function() {
  var pin = this.getTitleValue( 'PIN' );
  var time = Blockly.propc.valueToCode( this, 'TIME', Blockly.propc.ORDER_NONE ) || '0';
  
  var code = 'rc_time( ' + pin + ', ' + time + ' )';
  return [ code, Blockly.propc.ORDER_ATOMIC ];
};

Blockly.propc.rc_discharge = function() {
  var pin = this.getTitleValue( 'PIN' );
  var time = Blockly.propc.valueToCode( this, 'TIME', Blockly.propc.ORDER_NONE ) || '1';
  
  var code = 'rc_time( ' + pin + ', ' + time + ' )';
  return [ code, Blockly.propc.ORDER_ATOMIC ];
};
