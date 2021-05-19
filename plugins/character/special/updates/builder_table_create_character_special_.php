<?php namespace Character\Special\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateCharacterSpecial extends Migration
{
    public function up()
    {
        Schema::create('character_special_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name');
            $table->string('age');
            $table->text('address');
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('character_special_');
    }
}
