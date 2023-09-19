package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentOnePage20: ImageVector
  get() {
    if (_documentOnePage20 != null) {
      return _documentOnePage20!!
    }
    _documentOnePage20 = fluentIcon(name = "Filled.DocumentOnePage20", 20f) {
      materialPath {
          moveTo(6.0F, 2.0F)
          curveTo(4.895F, 2.0F, 4.0F, 2.895F, 4.0F, 4.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(1.5F, 4.0F)
          horizontalLineToRelative(5.0F)
          curveTo(12.776F, 6.0F, 13.0F, 6.224F, 13.0F, 6.5F)
          reflectiveCurveTo(12.776F, 7.0F, 12.5F, 7.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(7.224F, 7.0F, 7.0F, 6.776F, 7.0F, 6.5F)
          reflectiveCurveTo(7.224F, 6.0F, 7.5F, 6.0F)
          close()
          moveTo(7.0F, 13.5F)
          curveTo(7.0F, 13.224F, 7.224F, 13.0F, 7.5F, 13.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(12.776F, 14.0F, 12.5F, 14.0F)
          horizontalLineToRelative(-5.0F)
          curveTo(7.224F, 14.0F, 7.0F, 13.776F, 7.0F, 13.5F)
          close()
          moveToRelative(0.5F, -4.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveToRelative(-0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-5.0F)
          curveTo(7.224F, 10.5F, 7.0F, 10.276F, 7.0F, 10.0F)
          reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
          close()        
      }
    }
    return _documentOnePage20!!
  }

private var _documentOnePage20: ImageVector? = null
