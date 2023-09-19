package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceOffline24: ImageVector
  get() {
    if (_presenceOffline24 != null) {
      return _presenceOffline24!!
    }
    _presenceOffline24 = fluentIcon(name = "Regular.PresenceOffline24", 24f) {
      materialPath {
          moveTo(16.06F, 7.94F)
          curveToRelative(0.586F, 0.585F, 0.586F, 1.535F, 0.0F, 2.12F)
          lineTo(14.122F, 12.0F)
          lineToRelative(1.94F, 1.94F)
          curveToRelative(0.585F, 0.585F, 0.585F, 1.535F, 0.0F, 2.12F)
          curveToRelative(-0.586F, 0.587F, -1.536F, 0.587F, -2.122F, 0.0F)
          lineTo(12.0F, 14.122F)
          lineToRelative(-1.94F, 1.94F)
          curveToRelative(-0.585F, 0.585F, -1.535F, 0.585F, -2.12F, 0.0F)
          curveToRelative(-0.587F, -0.586F, -0.587F, -1.536F, 0.0F, -2.122F)
          lineTo(9.878F, 12.0F)
          lineToRelative(-1.94F, -1.94F)
          curveToRelative(-0.585F, -0.585F, -0.585F, -1.535F, 0.0F, -2.12F)
          curveToRelative(0.586F, -0.586F, 1.536F, -0.586F, 2.122F, 0.0F)
          lineTo(12.0F, 9.878F)
          lineToRelative(1.94F, -1.94F)
          curveToRelative(0.585F, -0.585F, 1.535F, -0.585F, 2.12F, 0.0F)
          close()
          moveTo(0.0F, 12.0F)
          curveTo(0.0F, 5.373F, 5.373F, 0.0F, 12.0F, 0.0F)
          reflectiveCurveToRelative(12.0F, 5.373F, 12.0F, 12.0F)
          reflectiveCurveToRelative(-5.373F, 12.0F, -12.0F, 12.0F)
          reflectiveCurveTo(0.0F, 18.627F, 0.0F, 12.0F)
          close()
          moveToRelative(12.0F, -9.0F)
          curveToRelative(-4.97F, 0.0F, -9.0F, 4.03F, -9.0F, 9.0F)
          reflectiveCurveToRelative(4.03F, 9.0F, 9.0F, 9.0F)
          reflectiveCurveToRelative(9.0F, -4.03F, 9.0F, -9.0F)
          reflectiveCurveToRelative(-4.03F, -9.0F, -9.0F, -9.0F)
          close()        
      }
    }
    return _presenceOffline24!!
  }

private var _presenceOffline24: ImageVector? = null
