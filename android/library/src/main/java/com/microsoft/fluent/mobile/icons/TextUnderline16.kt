package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextUnderline16: ImageVector
  get() {
    if (_textUnderline16 != null) {
      return _textUnderline16!!
    }
    _textUnderline16 = fluentIcon(name = "Filled.TextUnderline16", 16f) {
      materialPath {
          moveTo(4.0F, 13.75F)
          curveTo(4.0F, 13.336F, 4.336F, 13.0F, 4.75F, 13.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-6.5F)
          curveTo(4.336F, 14.5F, 4.0F, 14.164F, 4.0F, 13.75F)
          close()
          moveTo(4.75F, 2.0F)
          curveTo(5.164F, 2.0F, 5.5F, 2.336F, 5.5F, 2.75F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, 0.663F, 0.263F, 1.299F, 0.732F, 1.768F)
          curveTo(6.702F, 10.237F, 7.337F, 10.5F, 8.0F, 10.5F)
          reflectiveCurveToRelative(1.299F, -0.263F, 1.768F, -0.732F)
          curveTo(10.237F, 9.298F, 10.5F, 8.663F, 10.5F, 8.0F)
          verticalLineTo(2.75F)
          curveTo(10.5F, 2.336F, 10.836F, 2.0F, 11.25F, 2.0F)
          reflectiveCurveTo(12.0F, 2.336F, 12.0F, 2.75F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, 1.06F, -0.421F, 2.078F, -1.172F, 2.828F)
          curveTo(10.078F, 11.578F, 9.061F, 12.0F, 8.0F, 12.0F)
          curveToRelative(-1.06F, 0.0F, -2.078F, -0.421F, -2.828F, -1.172F)
          curveTo(4.422F, 10.078F, 4.0F, 9.061F, 4.0F, 8.0F)
          verticalLineTo(2.75F)
          curveTo(4.0F, 2.336F, 4.336F, 2.0F, 4.75F, 2.0F)
          close()        
      }
    }
    return _textUnderline16!!
  }

private var _textUnderline16: ImageVector? = null
