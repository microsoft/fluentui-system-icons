package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Warning20: ImageVector
  get() {
    if (_warning20 != null) {
      return _warning20!!
    }
    _warning20 = fluentIcon(name = "Filled.Warning20", 20f) {
      materialPath {
          moveTo(8.681F, 2.785F)
          curveToRelative(0.568F, -1.047F, 2.071F, -1.047F, 2.638F, 0.0F)
          lineToRelative(6.5F, 12.002F)
          curveTo(18.362F, 15.786F, 17.639F, 17.0F, 16.502F, 17.0F)
          horizontalLineTo(3.498F)
          curveToRelative(-1.137F, 0.0F, -1.86F, -1.215F, -1.319F, -2.215F)
          lineToRelative(6.503F, -12.0F)
          close()
          moveTo(10.5F, 7.5F)
          curveTo(10.5F, 7.224F, 10.276F, 7.0F, 10.0F, 7.0F)
          reflectiveCurveTo(9.5F, 7.224F, 9.5F, 7.5F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-4.0F)
          close()
          moveToRelative(0.25F, 6.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveToRelative(-0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(9.586F, 14.5F, 10.0F, 14.5F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          close()        
      }
    }
    return _warning20!!
  }

private var _warning20: ImageVector? = null
