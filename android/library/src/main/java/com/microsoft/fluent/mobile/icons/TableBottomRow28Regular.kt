package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TableBottomRow28: ImageVector
  get() {
    if (_tableBottomRow28 != null) {
      return _tableBottomRow28!!
    }
    _tableBottomRow28 = fluentIcon(name = "Regular.TableBottomRow28", 28f) {
      materialPath {
          moveTo(6.75F, 3.0F)
          curveTo(4.679F, 3.0F, 3.0F, 4.679F, 3.0F, 6.75F)
          verticalLineToRelative(14.5F)
          curveTo(3.0F, 23.321F, 4.679F, 25.0F, 6.75F, 25.0F)
          horizontalLineToRelative(14.5F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(6.75F)
          curveTo(25.0F, 4.679F, 23.321F, 3.0F, 21.25F, 3.0F)
          horizontalLineTo(6.75F)
          close()
          moveTo(4.5F, 21.25F)
          verticalLineTo(18.5F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(5.0F)
          horizontalLineTo(6.75F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.007F, -2.25F, -2.25F)
          close()
          moveTo(11.0F, 23.5F)
          verticalLineToRelative(-5.0F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(-6.0F)
          close()
          moveTo(4.5F, 17.0F)
          verticalLineTo(6.75F)
          curveToRelative(0.0F, -1.243F, 1.007F, -2.25F, 2.25F, -2.25F)
          horizontalLineToRelative(14.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineTo(17.0F)
          horizontalLineToRelative(-19.0F)
          close()
          moveToRelative(14.0F, 6.5F)
          verticalLineToRelative(-5.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(2.75F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineTo(18.5F)
          close()        
      }
    }
    return _tableBottomRow28!!
  }

private var _tableBottomRow28: ImageVector? = null
