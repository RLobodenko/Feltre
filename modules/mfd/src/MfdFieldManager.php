<?php
/** @file
 * Allows the content types that have mfd field(s) to save translations without
 * affecting the content types without the mfd field(s) from saving.
 */
namespace Drupal\mfd;

use Drupal\mfd\MfdFieldManagerInterface;

class MfdFieldManager implements MfdFieldManagerInterface {

  /**
   * the id of the Multilingual Form Display Type
   */
  const MULTILINGUAL_FORM_DISPLAY = "multilingual_form_display";

  /**
   * Has mfd field method
   *
   * This is a service that determines if a form has a Multilingual Form Display
   * initialized and returns a boolean to that effect.
   *
   * @param $entity
   *
   * @return bool
   */
  public function hasMfdField($entity): bool {
    $field_def = $entity->getFieldDefinitions();
    //takes the field definitions and loops through to find the mfd field.
    foreach($field_def as $fields => $field) {
      if($field->getType() == self::MULTILINGUAL_FORM_DISPLAY){
        return true;
      }
    }
    return false;
  }
}
