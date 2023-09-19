package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Clover16: ImageVector
  get() {
    if (_clover16 != null) {
      return _clover16!!
    }
    _clover16 = fluentIcon(name = "Filled.Clover16", 16f) {
      materialPath {
          moveTo(11.0F, 1.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          reflectiveCurveToRelative(-1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineTo(8.5F)
          curveTo(8.224F, 7.0F, 8.0F, 6.776F, 8.0F, 6.5F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          close()
          moveTo(4.0F, 1.02F)
          curveToRelative(-1.657F, 0.0F, -3.0F, 1.343F, -3.0F, 3.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-2.5F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          close()
          moveTo(4.0F, 14.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          reflectiveCurveToRelative(1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(2.5F)
          curveTo(6.776F, 8.0F, 7.0F, 8.224F, 7.0F, 8.5F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          close()
          moveToRelative(7.0F, 0.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          reflectiveCurveToRelative(-1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(8.5F)
          curveTo(8.224F, 8.0F, 8.0F, 8.224F, 8.0F, 8.5F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          close()        
      }
    }
    return _clover16!!
  }

private var _clover16: ImageVector? = null
