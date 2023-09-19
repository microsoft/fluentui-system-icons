package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronUpDown16: ImageVector
  get() {
    if (_chevronUpDown16 != null) {
      return _chevronUpDown16!!
    }
    _chevronUpDown16 = fluentIcon(name = "Filled.ChevronUpDown16", 16f) {
      materialPath {
          moveTo(4.22F, 6.53F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          lineTo(8.0F, 3.81F)
          lineToRelative(2.72F, 2.72F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(8.53F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          lineTo(4.22F, 5.47F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          close()
          moveToRelative(0.0F, 2.94F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineTo(8.0F, 12.19F)
          lineToRelative(2.72F, -2.72F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-3.25F, 3.25F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-3.25F, -3.25F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          close()        
      }
    }
    return _chevronUpDown16!!
  }

private var _chevronUpDown16: ImageVector? = null
