<?php
namespace Drupal\mfd;

/**
 * Interface MFDFieldManagerInterface
 *
 * This will provides an interface for the the MFD Field Manager.
 *
 * @package Drupal\mfd\Manager
 */
interface MfdFieldManagerInterface {

  /** return a boolean.
   *
   * Checks that the form state entity passed in has a mfd field.
   *
   * @param $entity
   *
   * @return bool
   */
  public function hasMfdField($entity): bool;

}
