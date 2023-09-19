package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableStackBelow16: ImageVector
  get() {
    if (_tableStackBelow16 != null) {
      return _tableStackBelow16!!
    }
    _tableStackBelow16 = fluentIcon(name = "Filled.TableStackBelow16", 16f) {
      materialPath {
          moveTo(13.5F, 14.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.776F, 13.0F, 13.5F, 13.0F)
          horizontalLineToRelative(-11.0F)
          curveTo(2.224F, 13.0F, 2.0F, 13.224F, 2.0F, 13.5F)
          reflectiveCurveTo(2.224F, 14.0F, 2.5F, 14.0F)
          horizontalLineToRelative(11.0F)
          close()
          moveTo(5.0F, 10.0F)
          horizontalLineTo(2.5F)
          curveTo(2.224F, 10.0F, 2.0F, 9.776F, 2.0F, 9.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(4.0F)
          close()
          moveToRelative(1.0F, 0.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(4.0F)
          close()
          moveToRelative(8.0F, -4.0F)
          verticalLineToRelative(3.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(11.0F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(3.0F)
          close()
          moveToRelative(-3.0F, -1.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(4.5F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(3.0F)
          close()
          moveToRelative(-1.0F, -3.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(2.0F)
          close()
          moveTo(4.5F, 2.0F)
          horizontalLineTo(5.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(2.0F)
          verticalLineTo(4.5F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          close()        
      }
    }
    return _tableStackBelow16!!
  }

private var _tableStackBelow16: ImageVector? = null
