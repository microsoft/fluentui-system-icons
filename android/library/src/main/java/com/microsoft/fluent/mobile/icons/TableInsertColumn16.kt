package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TableInsertColumn16: ImageVector
  get() {
    if (_tableInsertColumn16 != null) {
      return _tableInsertColumn16!!
    }
    _tableInsertColumn16 = fluentIcon(name = "Regular.TableInsertColumn16", 16f) {
      materialPath {
          moveTo(3.0F, 2.5F)
          curveTo(3.0F, 2.224F, 2.776F, 2.0F, 2.5F, 2.0F)
          reflectiveCurveTo(2.0F, 2.224F, 2.0F, 2.5F)
          verticalLineToRelative(11.0F)
          curveTo(2.0F, 13.776F, 2.224F, 14.0F, 2.5F, 14.0F)
          reflectiveCurveTo(3.0F, 13.776F, 3.0F, 13.5F)
          verticalLineToRelative(-11.0F)
          close()
          moveToRelative(11.0F, 0.0F)
          curveTo(14.0F, 2.224F, 13.776F, 2.0F, 13.5F, 2.0F)
          reflectiveCurveTo(13.0F, 2.224F, 13.0F, 2.5F)
          verticalLineToRelative(11.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-11.0F)
          close()
          moveTo(6.5F, 2.0F)
          curveTo(5.672F, 2.0F, 5.0F, 2.672F, 5.0F, 3.5F)
          verticalLineToRelative(9.0F)
          curveTo(5.0F, 13.328F, 5.672F, 14.0F, 6.5F, 14.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-9.0F)
          curveTo(11.0F, 2.672F, 10.328F, 2.0F, 9.5F, 2.0F)
          horizontalLineToRelative(-3.0F)
          close()
          moveTo(6.0F, 3.5F)
          curveTo(6.0F, 3.224F, 6.224F, 3.0F, 6.5F, 3.0F)
          horizontalLineToRelative(3.0F)
          curveTo(9.776F, 3.0F, 10.0F, 3.224F, 10.0F, 3.5F)
          verticalLineTo(5.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(3.5F)
          close()
          moveTo(6.0F, 6.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(6.0F)
          close()
          moveToRelative(0.0F, 5.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-3.0F)
          curveTo(6.224F, 13.0F, 6.0F, 12.776F, 6.0F, 12.5F)
          verticalLineTo(11.0F)
          close()        
      }
    }
    return _tableInsertColumn16!!
  }

private var _tableInsertColumn16: ImageVector? = null
