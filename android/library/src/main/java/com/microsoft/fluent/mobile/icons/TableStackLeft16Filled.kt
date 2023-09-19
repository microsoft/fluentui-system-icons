package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableStackLeft16: ImageVector
  get() {
    if (_tableStackLeft16 != null) {
      return _tableStackLeft16!!
    }
    _tableStackLeft16 = fluentIcon(name = "Filled.TableStackLeft16", 16f) {
      materialPath {
          moveTo(2.0F, 13.5F)
          curveTo(2.0F, 13.776F, 2.224F, 14.0F, 2.5F, 14.0F)
          reflectiveCurveTo(3.0F, 13.776F, 3.0F, 13.5F)
          verticalLineToRelative(-11.0F)
          curveTo(3.0F, 2.224F, 2.776F, 2.0F, 2.5F, 2.0F)
          reflectiveCurveTo(2.0F, 2.224F, 2.0F, 2.5F)
          verticalLineToRelative(11.0F)
          close()
          moveTo(6.0F, 5.0F)
          verticalLineTo(2.5F)
          curveTo(6.0F, 2.224F, 6.224F, 2.0F, 6.5F, 2.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(4.0F, 8.0F)
          horizontalLineTo(6.5F)
          curveTo(6.224F, 14.0F, 6.0F, 13.776F, 6.0F, 13.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(3.0F)
          close()
          moveToRelative(1.0F, -3.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(0.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(-3.0F)
          close()
          moveToRelative(3.0F, -1.0F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(-3.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(3.0F)
          close()
          moveToRelative(0.0F, -5.5F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(-3.0F)
          verticalLineTo(2.0F)
          horizontalLineToRelative(0.5F)
          curveTo(12.88F, 2.0F, 14.0F, 3.12F, 14.0F, 4.5F)
          close()        
      }
    }
    return _tableStackLeft16!!
  }

private var _tableStackLeft16: ImageVector? = null
