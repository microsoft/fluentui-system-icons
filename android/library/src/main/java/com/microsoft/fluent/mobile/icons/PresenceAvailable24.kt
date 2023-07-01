package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceAvailable24: ImageVector
  get() {
    if (_presenceAvailable24 != null) {
      return _presenceAvailable24!!
    }
    _presenceAvailable24 = fluentIcon(name = "Regular.PresenceAvailable24", 24f) {
      materialPath {
          moveTo(12.0F, 0.0F)
          curveTo(5.373F, 0.0F, 0.0F, 5.373F, 0.0F, 12.0F)
          reflectiveCurveToRelative(5.373F, 12.0F, 12.0F, 12.0F)
          reflectiveCurveToRelative(12.0F, -5.373F, 12.0F, -12.0F)
          reflectiveCurveTo(18.627F, 0.0F, 12.0F, 0.0F)
          close()
          moveTo(3.0F, 12.0F)
          curveToRelative(0.0F, -4.97F, 4.03F, -9.0F, 9.0F, -9.0F)
          reflectiveCurveToRelative(9.0F, 4.03F, 9.0F, 9.0F)
          reflectiveCurveToRelative(-4.03F, 9.0F, -9.0F, 9.0F)
          reflectiveCurveToRelative(-9.0F, -4.03F, -9.0F, -9.0F)
          close()
          moveToRelative(14.06F, -3.56F)
          curveToRelative(0.586F, 0.585F, 0.586F, 1.535F, 0.0F, 2.12F)
          lineToRelative(-5.5F, 5.5F)
          curveToRelative(-0.585F, 0.586F, -1.535F, 0.586F, -2.12F, 0.0F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.587F, -0.585F, -0.587F, -1.535F, 0.0F, -2.12F)
          curveToRelative(0.585F, -0.586F, 1.535F, -0.586F, 2.12F, 0.0F)
          lineToRelative(0.94F, 0.939F)
          lineToRelative(4.44F, -4.44F)
          curveToRelative(0.585F, -0.585F, 1.535F, -0.585F, 2.12F, 0.0F)
          close()        
      }
    }
    return _presenceAvailable24!!
  }

private var _presenceAvailable24: ImageVector? = null
