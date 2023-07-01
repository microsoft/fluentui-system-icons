package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableInsertRow16: ImageVector
  get() {
    if (_tableInsertRow16 != null) {
      return _tableInsertRow16!!
    }
    _tableInsertRow16 = fluentIcon(name = "Filled.TableInsertRow16", 16f) {
      materialPath {
          moveTo(2.5F, 13.0F)
          curveTo(2.224F, 13.0F, 2.0F, 13.224F, 2.0F, 13.5F)
          reflectiveCurveTo(2.224F, 14.0F, 2.5F, 14.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(13.776F, 13.0F, 13.5F, 13.0F)
          horizontalLineToRelative(-11.0F)
          close()
          moveToRelative(0.0F, -11.0F)
          curveTo(2.224F, 2.0F, 2.0F, 2.224F, 2.0F, 2.5F)
          reflectiveCurveTo(2.224F, 3.0F, 2.5F, 3.0F)
          horizontalLineToRelative(11.0F)
          curveTo(13.776F, 3.0F, 14.0F, 2.776F, 14.0F, 2.5F)
          reflectiveCurveTo(13.776F, 2.0F, 13.5F, 2.0F)
          horizontalLineToRelative(-11.0F)
          close()
          moveTo(2.0F, 9.5F)
          curveTo(2.0F, 10.328F, 2.672F, 11.0F, 3.5F, 11.0F)
          horizontalLineTo(5.0F)
          verticalLineTo(5.0F)
          horizontalLineTo(3.5F)
          curveTo(2.672F, 5.0F, 2.0F, 5.672F, 2.0F, 6.5F)
          verticalLineToRelative(3.0F)
          close()
          moveToRelative(8.0F, 1.5F)
          horizontalLineTo(6.0F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(6.0F)
          close()
          moveToRelative(1.0F, 0.0F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(1.5F)
          curveTo(13.328F, 5.0F, 14.0F, 5.672F, 14.0F, 6.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(11.0F)
          close()        
      }
    }
    return _tableInsertRow16!!
  }

private var _tableInsertRow16: ImageVector? = null
