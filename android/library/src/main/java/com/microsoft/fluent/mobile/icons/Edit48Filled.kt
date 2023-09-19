package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Edit48: ImageVector
  get() {
    if (_edit48 != null) {
      return _edit48!!
    }
    _edit48 = fluentIcon(name = "Filled.Edit48", 48f) {
      materialPath {
          moveTo(32.206F, 6.025F)
          curveToRelative(2.697F, -2.697F, 7.07F, -2.698F, 9.768F, 0.0F)
          curveToRelative(2.697F, 2.697F, 2.698F, 7.07F, 0.0F, 9.767F)
          lineTo(39.77F, 18.0F)
          lineTo(30.0F, 8.23F)
          lineToRelative(2.205F, -2.206F)
          close()
          moveTo(28.233F, 10.0F)
          lineTo(8.038F, 30.197F)
          curveToRelative(-0.762F, 0.762F, -1.305F, 1.714F, -1.572F, 2.758F)
          lineTo(4.039F, 42.44F)
          curveToRelative(-0.11F, 0.428F, 0.015F, 0.881F, 0.327F, 1.193F)
          curveToRelative(0.312F, 0.313F, 0.766F, 0.437F, 1.194F, 0.328F)
          lineToRelative(9.486F, -2.425F)
          curveToRelative(1.044F, -0.267F, 1.998F, -0.81F, 2.76F, -1.572F)
          lineToRelative(20.195F, -20.198F)
          lineTo(28.233F, 10.0F)
          close()        
      }
    }
    return _edit48!!
  }

private var _edit48: ImageVector? = null
