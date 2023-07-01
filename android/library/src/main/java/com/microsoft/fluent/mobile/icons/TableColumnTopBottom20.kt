package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableColumnTopBottom20: ImageVector
  get() {
    if (_tableColumnTopBottom20 != null) {
      return _tableColumnTopBottom20!!
    }
    _tableColumnTopBottom20 = fluentIcon(name = "Filled.TableColumnTopBottom20", 20f) {
      materialPath {
          moveTo(13.0F, 17.0F)
          horizontalLineToRelative(1.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineTo(13.0F)
          horizontalLineToRelative(-4.0F)
          verticalLineToRelative(4.0F)
          close()
          moveToRelative(0.0F, -5.0F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(-4.0F)
          close()
          moveToRelative(-1.0F, 0.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(4.0F)
          close()
          moveToRelative(-4.0F, 4.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(-1.0F)
          close()
          moveToRelative(-1.0F, -4.0F)
          verticalLineTo(8.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(4.0F)
          close()
          moveToRelative(-4.0F, 1.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(5.5F)
          curveTo(4.12F, 17.0F, 3.0F, 15.88F, 3.0F, 14.5F)
          verticalLineTo(13.0F)
          close()
          moveToRelative(10.0F, -6.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(5.5F)
          curveTo(17.0F, 4.12F, 15.88F, 3.0F, 14.5F, 3.0F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(4.0F)
          close()
          moveTo(8.0F, 4.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(3.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(1.0F)
          close()
          moveTo(7.0F, 3.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(5.5F)
          curveTo(3.0F, 4.12F, 4.12F, 3.0F, 5.5F, 3.0F)
          horizontalLineTo(7.0F)
          close()        
      }
    }
    return _tableColumnTopBottom20!!
  }

private var _tableColumnTopBottom20: ImageVector? = null
