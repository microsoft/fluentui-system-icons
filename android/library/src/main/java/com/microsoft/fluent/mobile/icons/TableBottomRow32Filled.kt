package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableBottomRow32: ImageVector
  get() {
    if (_tableBottomRow32 != null) {
      return _tableBottomRow32!!
    }
    _tableBottomRow32 = fluentIcon(name = "Filled.TableBottomRow32", 32f) {
      materialPath {
          moveTo(9.0F, 4.0F)
          curveTo(6.239F, 4.0F, 4.0F, 6.239F, 4.0F, 9.0F)
          verticalLineToRelative(11.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(11.0F)
          horizontalLineToRelative(2.0F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          horizontalLineTo(9.0F)
          close()
          moveToRelative(11.0F, 18.0F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(-8.0F)
          verticalLineToRelative(-6.0F)
          horizontalLineToRelative(8.0F)
          close()
          moveToRelative(3.0F, 6.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineToRelative(-6.0F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 2.761F, -2.239F, 5.0F, -5.0F, 5.0F)
          close()
          moveToRelative(-13.0F, -6.0F)
          verticalLineToRelative(6.0F)
          horizontalLineTo(9.0F)
          curveToRelative(-2.761F, 0.0F, -5.0F, -2.239F, -5.0F, -5.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineToRelative(6.0F)
          close()        
      }
    }
    return _tableBottomRow32!!
  }

private var _tableBottomRow32: ImageVector? = null
