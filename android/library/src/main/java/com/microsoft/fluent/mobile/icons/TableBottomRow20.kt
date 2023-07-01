package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableBottomRow20: ImageVector
  get() {
    if (_tableBottomRow20 != null) {
      return _tableBottomRow20!!
    }
    _tableBottomRow20 = fluentIcon(name = "Filled.TableBottomRow20", 20f) {
      materialPath {
          moveTo(14.5F, 3.0F)
          curveTo(15.88F, 3.0F, 17.0F, 4.12F, 17.0F, 5.5F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(-1.0F)
          verticalLineTo(5.5F)
          curveToRelative(0.0F, -0.78F, -0.595F, -1.42F, -1.355F, -1.493F)
          lineTo(14.5F, 4.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.72F, 4.0F, 4.08F, 4.595F, 4.007F, 5.356F)
          lineTo(4.0F, 5.5F)
          verticalLineTo(12.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(5.5F)
          curveTo(3.0F, 4.12F, 4.12F, 3.0F, 5.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          close()
          moveTo(17.0F, 14.5F)
          curveToRelative(0.0F, 0.818F, -0.393F, 1.544F, -1.0F, 2.0F)
          curveToRelative(-0.418F, 0.314F, -0.937F, 0.5F, -1.5F, 0.5F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(-4.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(1.5F)
          close()
          moveToRelative(-13.0F, 2.0F)
          curveTo(4.418F, 16.814F, 4.937F, 17.0F, 5.5F, 17.0F)
          horizontalLineTo(7.0F)
          verticalLineToRelative(-4.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.818F, 0.393F, 1.544F, 1.0F, 2.0F)
          close()
          moveTo(8.0F, 13.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(-4.0F)
          close()        
      }
    }
    return _tableBottomRow20!!
  }

private var _tableBottomRow20: ImageVector? = null
