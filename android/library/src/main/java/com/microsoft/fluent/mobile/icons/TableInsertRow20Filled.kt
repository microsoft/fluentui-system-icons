package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableInsertRow20: ImageVector
  get() {
    if (_tableInsertRow20 != null) {
      return _tableInsertRow20!!
    }
    _tableInsertRow20 = fluentIcon(name = "Filled.TableInsertRow20", 20f) {
      materialPath {
          moveTo(3.5F, 16.0F)
          curveTo(3.224F, 16.0F, 3.0F, 16.224F, 3.0F, 16.5F)
          reflectiveCurveTo(3.224F, 17.0F, 3.5F, 17.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(16.776F, 16.0F, 16.5F, 16.0F)
          horizontalLineToRelative(-13.0F)
          close()
          moveToRelative(0.0F, -13.0F)
          curveTo(3.224F, 3.0F, 3.0F, 3.224F, 3.0F, 3.5F)
          reflectiveCurveTo(3.224F, 4.0F, 3.5F, 4.0F)
          horizontalLineToRelative(13.0F)
          curveTo(16.776F, 4.0F, 17.0F, 3.776F, 17.0F, 3.5F)
          reflectiveCurveTo(16.776F, 3.0F, 16.5F, 3.0F)
          horizontalLineToRelative(-13.0F)
          close()
          moveTo(3.0F, 11.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(7.0F)
          horizontalLineTo(5.0F)
          curveTo(3.895F, 7.0F, 3.0F, 7.895F, 3.0F, 9.0F)
          verticalLineToRelative(2.0F)
          close()
          moveToRelative(9.0F, 2.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(6.0F)
          close()
          moveToRelative(1.0F, 0.0F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineToRelative(-2.0F)
          close()        
      }
    }
    return _tableInsertRow20!!
  }

private var _tableInsertRow20: ImageVector? = null
