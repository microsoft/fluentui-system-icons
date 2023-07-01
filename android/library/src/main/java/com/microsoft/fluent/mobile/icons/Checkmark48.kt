package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Checkmark48: ImageVector
  get() {
    if (_checkmark48 != null) {
      return _checkmark48!!
    }
    _checkmark48 = fluentIcon(name = "Regular.Checkmark48", 48f) {
      materialPath {
          moveTo(40.139F, 12.871F)
          curveToRelative(0.485F, 0.491F, 0.48F, 1.282F, -0.01F, 1.768F)
          lineToRelative(-22.25F, 22.0F)
          curveToRelative(-0.484F, 0.479F, -1.263F, 0.482F, -1.75F, 0.007F)
          lineToRelative(-9.25F, -9.0F)
          curveToRelative(-0.495F, -0.482F, -0.506F, -1.273F, -0.025F, -1.768F)
          curveToRelative(0.481F, -0.494F, 1.273F, -0.505F, 1.768F, -0.024F)
          lineTo(16.993F, 34.0F)
          lineToRelative(21.378F, -21.138F)
          curveToRelative(0.491F, -0.485F, 1.282F, -0.48F, 1.768F, 0.01F)
          close()        
      }
    }
    return _checkmark48!!
  }

private var _checkmark48: ImageVector? = null
