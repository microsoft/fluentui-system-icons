package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PresenceAvailable24: ImageVector
  get() {
    if (_presenceAvailable24 != null) {
      return _presenceAvailable24!!
    }
    _presenceAvailable24 = fluentIcon(name = "Filled.PresenceAvailable24", 24f) {
      materialPath {
          moveTo(12.0F, 24.0F)
          curveToRelative(6.627F, 0.0F, 12.0F, -5.373F, 12.0F, -12.0F)
          reflectiveCurveTo(18.627F, 0.0F, 12.0F, 0.0F)
          reflectiveCurveTo(0.0F, 5.373F, 0.0F, 12.0F)
          reflectiveCurveToRelative(5.373F, 12.0F, 12.0F, 12.0F)
          close()
          moveToRelative(5.06F, -13.44F)
          lineToRelative(-5.5F, 5.5F)
          curveToRelative(-0.585F, 0.586F, -1.535F, 0.586F, -2.12F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.587F, -0.585F, -0.587F, -1.535F, 0.0F, -2.12F)
          curveToRelative(0.585F, -0.586F, 1.535F, -0.586F, 2.12F, 0.0F)
          lineToRelative(0.94F, 0.939F)
          lineToRelative(4.44F, -4.44F)
          curveToRelative(0.585F, -0.585F, 1.535F, -0.585F, 2.12F, 0.0F)
          curveToRelative(0.586F, 0.586F, 0.586F, 1.536F, 0.0F, 2.122F)
          close()        
      }
    }
    return _presenceAvailable24!!
  }

private var _presenceAvailable24: ImageVector? = null
