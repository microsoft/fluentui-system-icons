package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronDownUp16: ImageVector
  get() {
    if (_chevronDownUp16 != null) {
      return _chevronDownUp16!!
    }
    _chevronDownUp16 = fluentIcon(name = "Filled.ChevronDownUp16", 16f) {
      materialPath {
          moveTo(11.78F, 3.53F)
          lineTo(8.53F, 6.78F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineTo(4.22F, 3.53F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineTo(8.0F, 5.19F)
          lineToRelative(2.72F, -2.72F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          close()
          moveTo(8.53F, 9.22F)
          curveTo(8.39F, 9.079F, 8.2F, 9.0F, 8.0F, 9.0F)
          reflectiveCurveTo(7.61F, 9.079F, 7.47F, 9.22F)
          lineToRelative(-3.25F, 3.25F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineTo(8.0F, 10.81F)
          lineToRelative(2.72F, 2.72F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(8.53F, 9.22F)
          close()        
      }
    }
    return _chevronDownUp16!!
  }

private var _chevronDownUp16: ImageVector? = null
