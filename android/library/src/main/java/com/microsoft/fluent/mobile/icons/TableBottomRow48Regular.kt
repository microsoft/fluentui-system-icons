package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TableBottomRow48: ImageVector
  get() {
    if (_tableBottomRow48 != null) {
      return _tableBottomRow48!!
    }
    _tableBottomRow48 = fluentIcon(name = "Regular.TableBottomRow48", 48f) {
      materialPath {
          moveTo(42.0F, 12.25F)
          curveTo(42.0F, 8.798F, 39.202F, 6.0F, 35.75F, 6.0F)
          horizontalLineToRelative(-23.5F)
          curveTo(8.798F, 6.0F, 6.0F, 8.798F, 6.0F, 12.25F)
          verticalLineToRelative(23.5F)
          curveTo(6.0F, 39.202F, 8.798F, 42.0F, 12.25F, 42.0F)
          horizontalLineToRelative(23.5F)
          curveToRelative(3.452F, 0.0F, 6.25F, -2.798F, 6.25F, -6.25F)
          verticalLineToRelative(-23.5F)
          close()
          moveTo(8.5F, 28.5F)
          verticalLineTo(12.25F)
          curveToRelative(0.0F, -2.071F, 1.679F, -3.75F, 3.75F, -3.75F)
          horizontalLineToRelative(23.5F)
          curveToRelative(2.071F, 0.0F, 3.75F, 1.679F, 3.75F, 3.75F)
          verticalLineTo(28.5F)
          horizontalLineToRelative(-31.0F)
          close()
          moveToRelative(0.0F, 7.25F)
          verticalLineTo(31.0F)
          horizontalLineTo(17.0F)
          verticalLineToRelative(8.5F)
          horizontalLineToRelative(-4.75F)
          curveToRelative(-2.071F, 0.0F, -3.75F, -1.679F, -3.75F, -3.75F)
          close()
          moveToRelative(20.0F, 3.75F)
          horizontalLineToRelative(-9.0F)
          verticalLineTo(31.0F)
          horizontalLineToRelative(9.0F)
          verticalLineToRelative(8.5F)
          close()
          moveToRelative(7.25F, 0.0F)
          horizontalLineTo(31.0F)
          verticalLineTo(31.0F)
          horizontalLineToRelative(8.5F)
          verticalLineToRelative(4.75F)
          curveToRelative(0.0F, 2.071F, -1.679F, 3.75F, -3.75F, 3.75F)
          close()        
      }
    }
    return _tableBottomRow48!!
  }

private var _tableBottomRow48: ImageVector? = null
