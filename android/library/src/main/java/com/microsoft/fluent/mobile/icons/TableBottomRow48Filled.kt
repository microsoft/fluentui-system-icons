package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableBottomRow48: ImageVector
  get() {
    if (_tableBottomRow48 != null) {
      return _tableBottomRow48!!
    }
    _tableBottomRow48 = fluentIcon(name = "Filled.TableBottomRow48", 48f) {
      materialPath {
          moveTo(42.0F, 12.25F)
          curveTo(42.0F, 8.798F, 39.202F, 6.0F, 35.75F, 6.0F)
          horizontalLineToRelative(-23.5F)
          curveTo(8.798F, 6.0F, 6.0F, 8.798F, 6.0F, 12.25F)
          verticalLineTo(29.0F)
          horizontalLineToRelative(2.5F)
          verticalLineTo(12.25F)
          curveToRelative(0.0F, -2.071F, 1.679F, -3.75F, 3.75F, -3.75F)
          horizontalLineToRelative(23.5F)
          curveToRelative(2.071F, 0.0F, 3.75F, 1.679F, 3.75F, 3.75F)
          verticalLineTo(29.0F)
          horizontalLineTo(42.0F)
          verticalLineTo(12.25F)
          close()
          moveTo(8.5F, 40.75F)
          curveToRelative(-1.518F, -1.14F, -2.5F, -2.955F, -2.5F, -5.0F)
          verticalLineTo(31.5F)
          horizontalLineToRelative(10.5F)
          verticalLineTo(42.0F)
          horizontalLineToRelative(-4.25F)
          curveToRelative(-1.407F, 0.0F, -2.705F, -0.465F, -3.75F, -1.25F)
          close()
          moveTo(42.0F, 31.5F)
          horizontalLineTo(31.5F)
          verticalLineTo(42.0F)
          horizontalLineToRelative(4.25F)
          curveToRelative(1.407F, 0.0F, 2.705F, -0.465F, 3.75F, -1.25F)
          curveToRelative(1.518F, -1.14F, 2.5F, -2.955F, 2.5F, -5.0F)
          verticalLineTo(31.5F)
          close()
          moveTo(29.0F, 42.0F)
          horizontalLineTo(19.0F)
          verticalLineTo(31.5F)
          horizontalLineToRelative(10.0F)
          verticalLineTo(42.0F)
          close()        
      }
    }
    return _tableBottomRow48!!
  }

private var _tableBottomRow48: ImageVector? = null
