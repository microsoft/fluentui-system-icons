package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Checkmark48: ImageVector
  get() {
    if (_checkmark48 != null) {
      return _checkmark48!!
    }
    _checkmark48 = fluentIcon(name = "Filled.Checkmark48", 48f) {
      materialPath {
          moveTo(40.317F, 12.695F)
          curveToRelative(0.582F, 0.59F, 0.577F, 1.54F, -0.012F, 2.122F)
          lineToRelative(-22.25F, 22.0F)
          curveToRelative(-0.581F, 0.574F, -1.515F, 0.578F, -2.101F, 0.008F)
          lineToRelative(-9.25F, -9.0F)
          curveToRelative(-0.594F, -0.578F, -0.607F, -1.527F, -0.03F, -2.121F)
          curveToRelative(0.579F, -0.594F, 1.528F, -0.607F, 2.122F, -0.03F)
          lineToRelative(8.195F, 7.975F)
          lineToRelative(21.204F, -20.966F)
          curveToRelative(0.59F, -0.582F, 1.54F, -0.577F, 2.122F, 0.012F)
          close()        
      }
    }
    return _checkmark48!!
  }

private var _checkmark48: ImageVector? = null
