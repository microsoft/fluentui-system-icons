package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableStackRight16: ImageVector
  get() {
    if (_tableStackRight16 != null) {
      return _tableStackRight16!!
    }
    _tableStackRight16 = fluentIcon(name = "Filled.TableStackRight16", 16f) {
      materialPath {
          moveTo(14.0F, 2.5F)
          curveTo(14.0F, 2.224F, 13.776F, 2.0F, 13.5F, 2.0F)
          reflectiveCurveTo(13.0F, 2.224F, 13.0F, 2.5F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-11.0F)
          close()
          moveTo(10.0F, 11.0F)
          verticalLineToRelative(2.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(-3.0F)
          horizontalLineToRelative(4.0F)
          close()
          moveToRelative(0.0F, -1.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(4.0F)
          close()
          moveTo(6.0F, 2.0F)
          horizontalLineToRelative(3.5F)
          curveTo(9.776F, 2.0F, 10.0F, 2.224F, 10.0F, 2.5F)
          verticalLineTo(5.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(2.0F)
          close()
          moveTo(5.0F, 5.0F)
          verticalLineTo(2.0F)
          horizontalLineTo(4.5F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(3.0F)
          close()
          moveTo(2.0F, 6.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(2.0F)
          close()
          moveToRelative(0.0F, 5.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(4.5F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          close()        
      }
    }
    return _tableStackRight16!!
  }

private var _tableStackRight16: ImageVector? = null
