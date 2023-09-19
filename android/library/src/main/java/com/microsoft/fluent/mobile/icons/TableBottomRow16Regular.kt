package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TableBottomRow16: ImageVector
  get() {
    if (_tableBottomRow16 != null) {
      return _tableBottomRow16!!
    }
    _tableBottomRow16 = fluentIcon(name = "Regular.TableBottomRow16", 16f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-7.0F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveToRelative(5.5F, 9.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineToRelative(4.0F)
          close()
          moveToRelative(-7.0F, 0.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(2.0F)
          horizontalLineTo(4.5F)
          curveTo(3.672F, 13.0F, 3.0F, 12.328F, 3.0F, 11.5F)
          verticalLineTo(11.0F)
          close()
          moveToRelative(0.0F, -1.0F)
          verticalLineTo(4.5F)
          curveTo(3.0F, 3.672F, 3.672F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.328F, 3.0F, 13.0F, 3.672F, 13.0F, 4.5F)
          verticalLineTo(10.0F)
          horizontalLineTo(3.0F)
          close()
          moveToRelative(8.0F, 3.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(0.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(11.0F)
          close()        
      }
    }
    return _tableBottomRow16!!
  }

private var _tableBottomRow16: ImageVector? = null
