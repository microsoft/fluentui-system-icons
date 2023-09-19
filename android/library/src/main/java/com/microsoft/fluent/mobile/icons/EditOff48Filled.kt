package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.EditOff48: ImageVector
  get() {
    if (_editOff48 != null) {
      return _editOff48!!
    }
    _editOff48 = fluentIcon(name = "Filled.EditOff48", 48f) {
      materialPath {
          moveTo(28.0F, 29.768F)
          lineToRelative(13.866F, 13.866F)
          curveToRelative(0.488F, 0.488F, 1.28F, 0.488F, 1.768F, 0.0F)
          reflectiveCurveToRelative(0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(-37.5F, -37.5F)
          curveToRelative(-0.488F, -0.488F, -1.28F, -0.488F, -1.768F, 0.0F)
          reflectiveCurveToRelative(-0.488F, 1.28F, 0.0F, 1.768F)
          lineTo(18.233F, 20.0F)
          lineTo(8.037F, 30.197F)
          curveToRelative(-0.761F, 0.762F, -1.304F, 1.715F, -1.571F, 2.758F)
          lineTo(4.039F, 42.44F)
          curveToRelative(-0.11F, 0.428F, 0.015F, 0.882F, 0.327F, 1.194F)
          curveToRelative(0.312F, 0.312F, 0.766F, 0.436F, 1.194F, 0.327F)
          lineToRelative(9.486F, -2.424F)
          curveToRelative(1.044F, -0.267F, 1.998F, -0.81F, 2.76F, -1.573F)
          lineToRelative(10.195F, -10.196F)
          close()
          moveToRelative(10.0F, -10.001F)
          lineToRelative(-6.464F, 6.466F)
          lineToRelative(-9.768F, -9.768F)
          lineTo(28.233F, 10.0F)
          lineToRelative(9.768F, 9.768F)
          close()
          moveTo(32.207F, 6.026F)
          curveToRelative(2.697F, -2.698F, 7.07F, -2.698F, 9.768F, 0.0F)
          curveToRelative(2.697F, 2.697F, 2.698F, 7.07F, 0.0F, 9.767F)
          lineToRelative(-2.205F, 2.206F)
          lineTo(30.0F, 8.231F)
          lineToRelative(2.205F, -2.205F)
          close()        
      }
    }
    return _editOff48!!
  }

private var _editOff48: ImageVector? = null
