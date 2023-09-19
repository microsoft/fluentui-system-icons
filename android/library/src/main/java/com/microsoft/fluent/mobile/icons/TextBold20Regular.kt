package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextBold20: ImageVector
  get() {
    if (_textBold20 != null) {
      return _textBold20!!
    }
    _textBold20 = fluentIcon(name = "Regular.TextBold20", 20f) {
      materialPath {
          moveTo(5.5F, 4.25F)
          curveTo(5.5F, 3.56F, 6.06F, 3.0F, 6.75F, 3.0F)
          horizontalLineToRelative(3.501F)
          curveToRelative(2.403F, 0.0F, 3.999F, 1.988F, 3.999F, 4.0F)
          curveToRelative(0.0F, 0.872F, -0.3F, 1.738F, -0.834F, 2.44F)
          curveToRelative(0.904F, 0.703F, 1.581F, 1.802F, 1.581F, 3.31F)
          curveToRelative(0.0F, 2.863F, -2.437F, 4.245F, -4.244F, 4.245F)
          horizontalLineTo(6.75F)
          curveToRelative(-0.69F, 0.0F, -1.25F, -0.56F, -1.25F, -1.25F)
          verticalLineTo(4.25F)
          close()
          moveTo(8.0F, 11.0F)
          verticalLineToRelative(3.495F)
          horizontalLineToRelative(2.753F)
          curveToRelative(0.811F, 0.0F, 1.744F, -0.618F, 1.744F, -1.745F)
          curveToRelative(0.0F, -1.129F, -0.937F, -1.75F, -1.744F, -1.75F)
          horizontalLineTo(8.0F)
          close()
          moveToRelative(0.0F, -2.5F)
          horizontalLineToRelative(2.248F)
          curveToRelative(0.882F, 0.0F, 1.502F, -0.721F, 1.502F, -1.5F)
          curveToRelative(0.0F, -0.78F, -0.62F, -1.5F, -1.499F, -1.5F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(3.0F)
          close()        
      }
    }
    return _textBold20!!
  }

private var _textBold20: ImageVector? = null
