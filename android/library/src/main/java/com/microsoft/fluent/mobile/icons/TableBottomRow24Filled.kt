package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableBottomRow24: ImageVector
  get() {
    if (_tableBottomRow24 != null) {
      return _tableBottomRow24!!
    }
    _tableBottomRow24 = fluentIcon(name = "Filled.TableBottomRow24", 24f) {
      materialPath {
          moveTo(6.25F, 3.0F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineToRelative(8.25F)
          horizontalLineToRelative(1.5F)
          verticalLineTo(6.25F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(11.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineToRelative(8.25F)
          horizontalLineTo(21.0F)
          verticalLineTo(6.25F)
          curveTo(21.0F, 4.455F, 19.545F, 3.0F, 17.75F, 3.0F)
          horizontalLineTo(6.25F)
          close()
          moveTo(4.5F, 20.49F)
          curveToRelative(-0.7F, -0.449F, -1.216F, -1.158F, -1.413F, -1.99F)
          curveTo(3.03F, 18.26F, 3.0F, 18.008F, 3.0F, 17.75F)
          verticalLineTo(16.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(5.0F)
          horizontalLineTo(6.25F)
          curveToRelative(-0.644F, 0.0F, -1.245F, -0.188F, -1.75F, -0.51F)
          close()
          moveToRelative(16.413F, -1.99F)
          curveTo(20.97F, 18.26F, 21.0F, 18.008F, 21.0F, 17.75F)
          verticalLineTo(16.0F)
          horizontalLineToRelative(-5.0F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(1.75F)
          curveToRelative(0.644F, 0.0F, 1.245F, -0.188F, 1.75F, -0.51F)
          curveToRelative(0.7F, -0.449F, 1.216F, -1.158F, 1.413F, -1.99F)
          close()
          moveTo(14.5F, 21.0F)
          verticalLineToRelative(-5.0F)
          horizontalLineToRelative(-5.0F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(5.0F)
          close()        
      }
    }
    return _tableBottomRow24!!
  }

private var _tableBottomRow24: ImageVector? = null
